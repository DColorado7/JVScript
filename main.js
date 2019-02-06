console.log();{
alert("Welcome Soccer Fan!!!!");  
var text;
var favTeam = prompt("What's your favorite soccer team?",);
var d = new Date();
document.getElementById("demo").innerHTML = d;

var txt;
var r = confirm("Do you like Soccer?"); 
if (r == true) {  
  txt = "Yay!";
} else {
  txt = "Boo!";
}
document.getElementById("answer").innerHTML = txt;


function myFunction(){
var x = "2";
var y = "6";
document.getElementById("team").innerHTML = x + " " + y; 
}

  var a = 3;
  var b = 3;
  var c = a + b;
  document.getElementById("trivia").innerHTML = c;

  var teams = ["Liverpool",  'Chelsea',  "Manchester City",  "Manchester United",  "Tottenham",  "Arsenal", ];
document.getElementById("six").innerHTML = teams;
  

if (new Date().getHours() < 19) {
  document.getElementById("timeday").innerHTML = "Good day!";
}

}