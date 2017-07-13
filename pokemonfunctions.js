function randomLetter(){
var num = Math.floor(Math.random()*26);
var s = String.fromCharCode(97+num);
return s;
}
function randomWord(){
var length = Math.floor(1+Math.random()*10);
var ting= "";
for(var i =0; i<length;i++){
ting = ting+randomLetter();
}
return ting;
}
function randomSentence(){
var length = Math.floor(1+Math.random()*10);
var sentence = "";
for(var i =0; i<length;i++){
sentence = sentence+" "+ randomWord();
}
return sentence.substr(0,2).toUpperCase()+sentence.substr(2)+".";
}
console.log(randomSentence());
var firstPokemon = ["Pikachu",60,100];
var secondPokemon = ["Blaziken",10,180];
var thirdPokemon = ["Gyrados",40,150];
var fourthPokemon =["Bidoof",32,47];
function pokeAttack(x,y){
y[2]=y[2]-x[1];
console.log(y[0]+" Health is "+ y[2]); 
}
while(firstPokemon[2]>=0){
    pokeAttack(firstPokemon,secondPokemon);
    if(firstPokemon[2]<=0){
        console.log(firstPokemon[0]+" fainted in battle!");
    }
     pokeAttack(secondPokemon,firstPokemon);
    if(secondPokemon[2]<= 0){
        console.log(secondPokemon[0]+" fainted in battle!");   
    }
}
while(thirdPokemon[2]>=0){
    pokeAttack(thirdPokemon,fourthPokemon);
    if(thirdPokemon[2]<=0){
        console.log(thirdPokemon[0]+" fainted in battle!");    
    }
     pokeAttack(fourthPokemon,thirdPokemon);
    if(fourthPokemon[2]<= 0){
        console.log(fourthPokemon[0]+" fainted in battle!");
    }
}