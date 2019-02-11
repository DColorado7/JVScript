console.log();{  
  // Rubric 1 

// alert("Welcome Soccer Fan!!!!");  
// var text;
// var favTeam = prompt("What's your favorite soccer team?",);

// var d = new Date();
// document.getElementById("demo").innerHTML = d;

// var txt;
// var r = confirm("Do you like Soccer?"); 
// if (r == true) {  
//   txt = "Yay!";
// } else {
//   txt = "Boo!";
// }
// document.getElementById("answer").innerHTML = txt;


// function myFunction(){
// var x = "2";
// var y = "6";
// document.getElementById("team").innerHTML = x + " " + y; 
// }

//   var a = 3;
//   var b = 3;
//   var sum = a + b;
//   console.log (sum);
//   document.getElementById("trivia").innerHTML = sum;

//   var teams = ["Liverpool",  'Chelsea',  "Manchester City",  "Manchester United",  "Tottenham",  "Arsenal", ];
//   console.log (teams);
//   document.getElementById("six").innerHTML = teams;
  

if (new Date().getHours() < 18) {
  document.getElementById("timeday").innerHTML = "Good day!";
}

  // Rubric 2

function myLeague() {
  var text;
  var league = document.getElementById("leagues").value;

  switch(league) {
    case "MLS":
      text = "It's fine";
    break;
    case "Premier League":
    text = "Awesome!!!!!";
    break;
    case "Bundesliga":
    text = "Cool.";
    break;
    case "La Liga":
    text = "It's Alright. Real Madrid v Barcelona is great though!";
    break;
    case "Ligue 1":
    text = "Nothing but PSG aka boring.";
    break;
    default:
    text = "Never seen it. Hope it's enjoyable.";
  }
  document.getElementById("league").innerHTML = text;
}
var z = multiply(7,9); 
console.log(z);

function multiply(d, f) {
  return d * f;
  
}  

var userName = prompt("Who are You?", "Enter Name");
if (userName==="Dakota"){
  alert("Hi Dakota");} else{ alert("Welcome Stranger");}

function welcome(){
  console.log("beep")
  var greeting= "hello " + userName;
  return (greeting);
}  
console.log(welcome(userName));
}
