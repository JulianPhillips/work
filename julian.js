/*function Julian(Name,Age,isCool){

console.log("Aye yo "+Name+" You look about uhhhh "+Age+" Years old and its "+isCool+" that you cool");

}

Julian("Julian",17,true);
*/

//Task
//Create a random function which takes a numbere and returns a random number between 0 and that number (not including that number)
//PSEUDO
//Multiply Math.random() by a given number
//return te remaining integer

function rand(x){

var num = x*Math.random();
return Math.floor(num);

}
console.log(rand(100));
console.log(rand(69));
console.log(rand(2000));
console.log(rand(10));