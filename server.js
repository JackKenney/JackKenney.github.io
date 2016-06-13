/*SERVER
Author: Jack Kenney
Basic setup w/ express and socket.io: */

var express = require('express'),
    app = express(),
    server = require( 'http' ).createServer( app ),
//sockets
    io = require('socket.io').listen(server),
// database
    mysql = require( 'mysql' ),
    connection = mysql.createConnection('mysql://root:sqlroot123@localhost/chatroom_accounts');

//server listens on port 1337
var port = process.env.PORT || 1337;

server.listen(port, function() {
  console.log('Listening on ' + port);
});

//send page to address on req. to default directory
  app.use(express.static(__dirname + '/public'));


// Chatroom:
//  Variables
var numUsers = 0, //number of users currently logged in!
    guests = 0;

//connect to database
connection.connect();

//  Sockets

io.on('connection', function(socket) {
  socket.emit('connected', { 'numUsers':numUsers } );
  socket.loggedIn = false;
  socket.guest = false;
  socket.username = '';

  socket.on('login', function(data) { // {  'username':username, 'password':password, stay:stay (boolean for cookie) }
    console.log('user logged in');
    var sql = "SELECT * FROM users WHERE users.username = \"" + data.username + "\";";
    connection.query(sql, function(err,results) {
      results = results[0];
      if(err) console.log(err);
      else {
        if(results === undefined || results.password !== data.password) {
           socket.emit('loginResponse', { type:2 }); //type 2 = uname not found
        }
        else {
          numUsers++;
          socket.emit('loginResponse', { 'results':results, type:1, stay:true, 'numUsers':numUsers }); //type 1 = login confirmed
          socket.loggedIn = true;
          socket.guest = false;
          socket.username = data.username;
          socket.fullname = results.firstname + ' ' + results.lastname;
        }
      } 
    });  
  });

  socket.on('cookie', function(data) { // { username:u }
    var sql = "SELECT * FROM users WHERE users.username = \"" + data.username + "\";";
    connection.query(sql, function(err,results) {
      results = results[0];
      if(err) console.log(err);
      else {
        numUsers++;
        socket.emit('loginResponse', { 'results':results, type:1, 'numUsers':numUsers }); //type 1 = conf
        socket.loggedIn = true;
        socket.guest = false;
        socket.username = data.username;
        socket.fullname = results.firstname + ' ' + results.lastname;
        socket.broadcast.emit('sysMessage', { username:socket.username, type:1, 'numUsers':numUsers });
      } 
    });    
  });

  socket.on('register', function(data) {  //{ username, firstname, lastname, email, password }
    //query sql string to database and add user as long as username is not taken -> if username is taken, emit a "type" back that shows that username is taken and display the error response accordingly.  
    var sql = "INSERT INTO users (username,firstname,lastname,email,password) VALUES(";
    sql += "\""+data.username+"\",";
    sql += "\""+data.firstname+"\",";
    sql += "\""+data.lastname+"\",";
    sql += "\""+data.email+"\",";
    sql += "\""+data.password+"\");";

    var sql2 = "SELECT * FROM users WHERE users.username = \"" + data.username + "\"";
    connection.query(sql2, function(err,results) {
      if(err) console.log("sql err");
      else {
        if(results.username !== data.username) {
          connection.query(sql, function(err) {
            socket.emit('registerResponse',{ "firstname":data.firstname, type:1, "numUsers":numUsers }); //type 1 = successful registration
          });
        }
        else {
          socket.emit('registerResponse',{ type:2 }); //type 2 = username taken
        }
      }
    });
  });
  socket.on('guest', function() {
    socket.username = 'guest' + (guests+1);
    guests++;
    socket.guest = true;
    socket.loggedIn = true;
    numUsers++;
    socket.emit('guestConf', { username:socket.username, 'numUsers':numUsers });
    socket.broadcast.emit('sysMessage', { username:socket.username, type:1, 'numUsers':numUsers });
  });

  socket.on('newMessage', function(data) { //{ username, fullname, message }
    console.log('\'newMessage\'' + '\n' + socket.username);
    socket.broadcast.emit('otherMessage', { username:socket.username, fullname:socket.fullname, message:data.message } );
  });
  socket.on('logout', function(data) { // {username}
    numUsers--;
    socket.broadcast.emit('sysMessage', { 'username':socket.username, 'type':2, 'numUsers':numUsers });
    socket.username = '';
    socket.loggedIn = false;
  });
  socket.on('guestOut', function() {
    guests--;
    numUsers--;
    socket.broadcast.emit('sysMessage', {
      'username':socket.username,
      'type':2,
      'numUsers':numUsers
    });
    socket.username = ''; 
    socket.loggedIn = false;
    socket.guest = false;
  });
  socket.on('disconnect', function() {  //{ username }
    //emit to all users that user "____ has left" and the updated userCount
    //{ username, type (2), numUsers }
    if(socket.loggedIn) {
      numUsers--;
      if(socket.guest) guests--;
      console.log(socket.username + " has disconnected");
      socket.broadcast.emit('sysMessage',{ 
        'username':socket.username,
         'type':2,
        'numUsers':numUsers
      });
    }
    else {
      socket.username = '';
      console.log("someone refreshed");
    }
  });

});
