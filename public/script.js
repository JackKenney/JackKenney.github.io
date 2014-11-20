//CLIENT SIDE SCRIPTS:

// Connect to server
var socket = io('/');
console.log(socket);

$(document).ready( function() {
//global client variables
var numUsers,
    username = '',
    loggedIn = false,
    lastName = '',
    connected
    userCount = $(document.getElementById('userCount')),
    chatArea = $(document.getElementById('chatArea')),
    messageInput = $(document.getElementById('messageInput')),
    usernameInput = $(document.getElementById('usernameInput')),
    isMobile = false;
// Mobile accomodations:
	
/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
	//tests if device is a hand held and creates boolean isMobile  (true if mobile, else false)
	isMobile = true;
}

//if(isMobile){ $("body").width($(window).width()); } //if mobile, shrink website
*/


// Socket handlers for incoming server emissions:
//handler for initial connection information
socket.on('connected', function(data) { //{ 'numUsers':numUsers }
  console.log('connected');
  updateUC(data.numUsers);
  connected = true;
  log({ message:"Welcome! Please login", type:3 } );
});

//any incoming system message (login,logout,namechange)
socket.on('sysMessage', function(data) { //{ username, type, [numUsers], [submit] }
  console.log('sysMessage');
  if(data.type===1)  {
    var mess = data.username + " has joined the chatroom!";
    log({ message:mess, type:3 });
  }
  else if (data.type===2) {
    var mess = data.username + " has left the chatroom.";
    log({ message:mess, type:3 });
  }
  else if (data.type===3) {
    var mess = data.username + " changed their name to " + data.submit;
    log({ message:mess, type:3 }); 
  }
  updateUC(data.numUsers);
});

//any incoming message from another user
socket.on('otherMessage', function(data) { //{ username, message }
  console.log('otherMessage');
  if(data.username!==username) {
    log({ message:data.message, type:2, username:data.username });
    console.log("someone else's message added");
  }
});

//server response to login request
socket.on('loginResponse', function(data) { //{ username, type(boolean), numUsers }
  console.log('loginResponse');
  if(data.type) {
    //olelcome user X to chatroom and set username variable to data.username
    //log system message welcome!
    username = data.username; //setting global var
    console.log(data.username);
    log({ message:("Welcome to the Chatroom, " + username + "!"), type:3 });
    loggedIn = true;
    updateUC(data.numUsers);
    console.log(numUsers);
    //add a change to 'placeholder' to make it the username
    usernameInput.attr('placeholder', data.username.toString()).val("");
    messageInput.focus();
    unfade();
  }
  else {
    showError();
  }
});
socket.on('nameChangeRes', function(data) { //{ original, submit, type(boolean) }
  console.log('nameChangeRes');
  if(data.type) {
    username = data.submit; //setting global var
    console.log(data.submit);
    log({ message:("You've successfully changed your name from " + data.original + " to " + data.submit + '!'), type:3 });

    //add a change to 'placeholder' to make it the username
    usernameInput.attr('placeholder', data.submit.toString()).val("");
    messageInput.focus();
  }
  else {
    showError();
  }

}); 
//:End handlers for server emissions

// Necessary functions:

  var updateUC = function(nu) {
    if(nu !== undefined) {
        numUsers = nu;
        userCount.empty();
        var text = document.createTextNode(nu + ' User' + (nu!==1 ? 's' : '') ); //account for plural (yes:no)
        userCount.append(text);
    }
  }
  var scroll = function() {
    chatArea.scrollTop($('li').last().position().top + $('li').last().height()); //try this, may not work?
  }
  var fade = function() {
    //make other parts of screen unfade
    chatArea.css('opacity','0.5');
    $('#uInput').css('opacity','0.5');

    //make set button and input glow
    $('#unameDiv').addClass('glow');
  }
  var unfade = function() {
    //make other parts of screen unfade
    chatArea.css('opacity','1.0');
    $('#uInput').css('opacity','1.0');

    //make set button and input glow
    $('#unameDiv').removeClass('glow');
  }
  var showError = function() {
    $('#nameError').css('display','inline-block');
  }
  var log = function(data) { //data is { message, [type], [user] }

    // a message from me
    if (data.type===1) {
      var mess = $(document.createElement('li')),
          mText = $(document.createTextNode(data.message)),
          br = document.createElement('br');

      if(lastName!==username) {
        var name = $(document.createElement('li')),
            nText = $(document.createTextNode(username));
        name.addClass('name my');
        name.append(nText);
        chatArea.append(name);
        chatArea.append(br);
        lastName = username;
      }
      mess.addClass('myMessages message');
      mess.append(mText);
      chatArea.append(mess);
      chatArea.append(br);  
    }
    // any other user's message
    else if (data.type===2) {
      var mess = $(document.createElement('li')),
          mText = $(document.createTextNode(data.message)),
          br = document.createElement('br');

      if(lastName!==data.username) {
        name = $(document.createElement('li'));
        nText = $(document.createTextNode(data.username));
        name.addClass('name other');
        name.append(nText);
        chatArea.append(name);
        chatArea.append(br);
        lastName = data.username;
      }
      mess.addClass('otherMessages message');
      chatArea.append(mess);
      mess.append(mText);
      chatArea.append(br);
    }
    // any other system message
    else {
      var mess = $(document.createElement('li')),
          mText = $(document.createTextNode(data.message)),
          br = document.createElement('br');
      mess.addClass('log');
      chatArea.append(mess);
      mess.append(mText);
      chatArea.append(br);
      lastName = '';
    }
    scroll();
  } //end of log function


  var cleanUsername = function(input) {  //returns boolean
    var result = $('<div/>').text(input).html() || input;
    if(result.indexOf(' ') !== -1) {
      return false;
    }
    else return result.toString();
  }
  var hideErrors = function() {
    $('#nameError').css('display','none');
    $('#nameError2').css('display','none');
  }

if(loggedIn===false) {
  fade();

  $('#setButton').on('click', function () {
    var unInput = usernameInput.val().trim();
    un = cleanUsername(unInput);
    if(un) {
      socket.emit('login',{ username:un } );
      hideErrors();
      console.log("good " + un);
    }
    else {
      $('#nameError2').css('display','inline-block');
      console.log("bad " + un);
    }
  });
}
else {
  unfade();
  $('#setButton').on('click', function () {
    var unInput = usernameInput.val().trim();
    un = cleanUsername(unInput);
    if(un) {
      socket.emit('setUsername',{  original:username, submit:un } );
      hideErrors();
      console.log("good " + un);
    }
    else {
      $('#nameError2').css('display','inline-block');
      console.log("bad " + un);
    }
  });

}
  //add funcitonality for typing (enter, hover, enter on setButton(maybe somewhere else)
  $(window).keydown(function (event) {
    // When the client hits ENTER on their keyboard
    if(usernameInput.is(":focus")){
      if (event.which === 13) {
        var unInput = usernameInput.val().trim();
        un = cleanUsername(unInput);
        if(un) {
          if(loggedIn) {
            console.log('\'setUsername\'');
            socket.emit('setUsername',{  original:username, submit:un } );
          }
          else {
            console.log('\'login\'');
            socket.emit('login',{ username:un });
          }
          console.log("good " + un);
          hideErrors();
        }
        else {
          $('#nameError2').css('display','inline-block');
          console.log("bad " + un);
        }
      }
    }
    if(loggedIn && messageInput.is(":focus") && messageInput.val()!=="") {
      if (event.which === 13) {
        sendMessage();
      }
    }
  });
 
  //sendmessage function
  var sendMessage = function() {
    var mess = messageInput.val().trim();
    //may need clean message input?
    log({ message:mess, type:1 });
    socket.emit('newMessage', { 'username':username, message:mess });
    messageInput.val("");
  }

  messageInput.click(function () {
    messageInput.focus();
  });
  usernameInput.click(function () {
    usernameInput.focus();
  });
  chatArea.click(function() {
    messageInput.focus();
  });

}); //end document ready
