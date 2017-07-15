var charizardArray = ["Blaze",266,false,["Fire","Flying"]];

var charizardObject = {
    "HP": 269,
    "attack": "Flamethrower",
    "legendary":false,
    "types":["Fire","Flying"]
};

var yeezy ={
Brand : "Adidas",
Model : "Yeezy Boost 350",
Color : "Turtledove",
Size  : 9,
Price : 3200
};

function Shoe(model,brand,color,size,price){
this.model = model;
this.brand = brand;
this.color = color;
this.size = size;
this.Price = price;
}

function Superhero(realName,stageName,power,powerlevel){
    this.realName = realName;
    this.power = power;
    this.stageName = stageName;
    this.powerlevel = powerlevel;

this.talk = function(){
console.log("AYE BOI I'M "+ stageName+" BUT YO GIRL CALL ME "+realName);
}

}

var superman = new Superhero("Bruce Wayne","Batman",["Tactician","Rich"],"High");
var spidyman = new Superhero("Peter Parker", "SpiderMan",["Web-slinging","Wall Climbing"],"Weak");