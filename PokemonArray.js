var x=["Blastoise","Blaziken","Torterra","Metagross","Pikachu","Eevee"];

var firstToFight = x[0];
var secondToFight=[1];

x.pop();
x.pop();
x.pop();
x.push("Raichu");
console.log("The roster size is "+x.length);
for(var i =0; i<x.length;i++){
    console.log(x[i]);
}




