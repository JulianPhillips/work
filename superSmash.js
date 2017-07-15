var prompt = require('prompt-sync')();

var locationArray = ["New York Subway","Donkey Kong Kingdom ","Ness World","Lavender Town"];

var timesHit;

var characterArray =["Mario","Charizard","Ness","King Dedede"];

var character;




function askQuestions(){
timesHit = prompt("How many times you gonna hit the enemy? ");

character = parseInt(prompt("Do you want Mario (1) or Charizard (2) or Ness(3) or King Dedede(4) "));


if(character == 1){
character = characterArray[character-1];
characterArray.pop(character);
}
else if(character ==2){
character = characterArray[character-1];
characterArray.pop(character)
}
else if(character == 3){
character = characterArray[character-1];
characterArray.pop(character);
}
else if(character == 4){
character = characterArray[character-1];
characterArray.pop(character);
}
else{
console.log("That number (or letter) is not an option but we can make u be mario for now ");
character = characterArray[0];
characterArray.pop(character);
}

}
var continu="y";
while(continu=="y"){
askQuestions();
var randEnemy=characterArray[ Math.floor(Math.random()*characterArray.length)];
var randPlace = locationArray[Math.floor(Math.random()*locationArray.length)];

console.log(character+" Fought "+randEnemy+" At "+randPlace+" After hitting him "+timesHit+" Time(s)");
characterArray.push(character);
continu = prompt("Would you like to fight again? y or n  ");

}
console.log("have a nice day!");