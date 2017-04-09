var config = {
  apiKey: "AIzaSyAxf4SNS4G-Ao1zHhlW_apVMhvY3TEkge4",
  authDomain: "chatroom-todo.firebaseapp.com",
  databaseURL: "https://chatroom-todo.firebaseio.com",
  projectId: "chatroom-todo",
  storageBucket: "chatroom-todo.appspot.com",
  messagingSenderId: "386094358766"
};
firebase.initializeApp(config);
var myFirebase = new Firebase('https://chatroom-todo.firebaseio.com/');
var firebaseRef = firebase.database().ref();
var pretext= document.getElementById("chat-area");
var referinta= firebase.database().ref().child('Chat');
var referuser=firebase.database().ref().child('Usernames');
var userdatase=firebase.database().ref().child(username);
var userchat=username.value;
myFirebase.child("Usernames").push({userlist:username});
var welcome= document.getElementById("name-area");
welcome.innerText="Welcome, "+ username;

function submitbut(){
  var textInput = document.getElementById("text");
  var submit =document.getElementById("submit");
var user=username.value;
var mss=textInput.value;
myFirebase.child("Chat").push({user:username, text:mss});
textInput.value = "";
}

$(function() {
    $("form").submit(function() { return false; });
});



referinta.on('child_added', snap => {
   var name=snap.child("user").val();
   var textsub=snap.child("text").val();
  $("#chat-area").append("<tr><td>"+ textsub +"</td><td>"+ name +"</td><td><button id='butt' type='button' onclick='addtodofunc()'>AddToDO</button></td></tr>" );

 });



 referuser.on('child_added', snapshot => {
    var name=snapshot.child("userlist").val();
    $("#userbody").append("<tr><td>"+ name +"</td></tr>");});






function addtodofunc(){


  $("#chat-area tr").click(function(){
     $(this).addClass('selected').siblings().removeClass('selected');
     var value=$(this).find('td:first').html();
  $("#Todo").append("<tr><td contenteditable='true'>"+ value +"</td><td><button id='buttdel' type='button' onclick='deltodo(this)'>Delete</button></td><td><button type='button' class='editbtn'>Edit</button></td></tr>");
} )
}



function deltodo(btndel){
  if(typeof(btndel)=="object"){
    $(btndel).closest("tr").remove();

  }
  else{
    return false;}
}
