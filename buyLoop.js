var prompt = require('prompt-sync')();


var items = ["used Yeezy's","Tent"]
var money = 1000;

while(money>99){
console.log("You have $"+money+" left. A tent is $100, used Yeezy's are 500");

var answer = prompt("Which item do you want to buy? Tent : T or Yeezy's : Y");
if(answer == "Y"){
    money=money-500;
    items.push("Yeezy's");
    console.log("You got "+money+ " left. ");
}
else if(answer=="T"){
    items.push("Tent");
    money = money-100;
    console.log("You bought a tent!");

}
else{
    console.log("That is not an option try again.");
}


}

console.log("Boi u broke u got "+money+" Dollars boi");