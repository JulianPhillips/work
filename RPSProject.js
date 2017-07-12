var player = "Rock";
 
 var comp =["Rock","Paper","Scissors"];

 var x = comp[Math.floor(Math.random()*3)];

 if(x == "Rock" && player == "Rock"){
    console.log("TIE");
 }
 else
if(x == "Rock" && player == "Paper"){
    console.log("W");
 }
 else
 if(x == "Rock" && player == "Scissors"){
    console.log("L");
 }
 else
if(x == "Scissors" && player == "Rock"){
    console.log("W");
 }
 else
 if(x == "Scissors" && player == "Paper"){
    console.log("L");
 }
 else
 if(x == "Scissors" && player == "Scissors"){
    console.log("TIE");
 }
 else
 if(x == "Paper" && player == "Rock"){
    console.log("L");
 }
 else
 if(x == "Paper" && player == "Paper"){
    console.log("TIE");
 }
 else
 if(x == "Paper" && player == "Scissors"){
    console.log("W");
 }
 