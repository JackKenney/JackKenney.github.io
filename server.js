//SERVER
// Basic setup w/ express and socket.io:

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
var numUsers = 0,
    users = {};

//connect to database
connection.connect();
console.log('Database Connection Established!');

//  Sockets

io.on('connection', function(socket) {
  socket.emit('connected', { 'numUsers':numUsers } );
  socket.loggedIn = false;

  socket.on('login', function(data) {  // { username:un }
    console.log('\'login\'');
    if(setUsername(data.original, data.username)) {
      numUsers++;
      socket.loggedIn = true;
      socket.username = data.username;
      console.log(socket.username + '\n' + numUsers);
      socket.emit('loginResponse', { username:data.username, type:true, numUsers:numUsers });
      socket.broadcast.emit('sysMessage', { username:data.username, type:1, numUsers:numUsers });
    }
    else {
      socket.emit('loginResponse', { type:false });
      console.log('bad username input');
    }
  });
  socket.on('register', function(data) {  //{ username, firstname, lastname, email, password }
    //query sql string to database and add user as long as username is not taken -> if username is taken, emit a "type" back that shows that username is taken and display the error response accordingly.  

  });
  
  socket.on('setUsername', function(data) { //{ original:username, submit:un }; 

    console.log('\'setUsername\'');
    if(setUsername(data.original, data.submit)) { //if un isn't taken
      console.log(data.original + " changed their name to " + data.submit);
      socket.username = data.submit;
      users[data.submit] = data.submit;
      delete users[data.original];
      socket.broadcast.emit('sysMessage',{ username:data.original, type:3, 'numUsers':numUsers, submit:data.submit });
      socket.emit('nameChangeRes', { original:data.original, submit:data.submit, type:true });
      
    }
    else { socket.emit('nameChangeRes', { type:false }); }

  });

  socket.on('newMessage', function(data) { //{ username, message }
    console.log('\'newMessage\'' + '\n' + socket.username);
    socket.broadcast.emit('otherMessage', { username:socket.username, message:data.message } );
  });

  socket.on('disconnect', function() {  //{ username }
    //emit to all users that user "____ has left" and the updated userCount
    //{ username, type (2), numUsers }
    console.log('\'disconnect\'');
    if(socket.loggedIn) {
      numUsers--;
      delete users[socket.username];
      console.log(socket.username + " has disconnected\n" + users);
      socket.broadcast.emit('sysMessage',{ 
        'username':socket.username,
         'type':2,
        'numUsers':numUsers
      });
    }
    else {
      delete users[socket.username];
      socket.username = undefined;
      console.log("someone refreshed");
    }
  });
  
  var setUsername = function(original, submit) { //return a boolean then submit username
    if(users[submit]===undefined) {
      users[submit] = submit;
      users[original] = undefined;
      user = users[submit];
      console.log(users);
      return true;
    }
    else {
      return false;
    }
  }
  
});
