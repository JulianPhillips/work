var prompt = require('prompt-sync')();
function Pokemon(Name,HP,Atk,Type,Defence,Legend){
this.Name = Name;
this.HP = HP;
this.Atk = Atk;
this.Type = Type;
this.Defence = Defence;
this.Legend = Legend;
this.talk= function(){
    console.log( "Name: "+Name+"\n HP: "+HP+"\n "+"Atk: "+Atk+"\n Type: "+Type+"\n Defence: "+Defence+"\n Legend: "+Legend);
}
}
var PokemonArray=[
    new Pokemon("Charizard",100,100,["Fire","Flying"],100,false), 
    new Pokemon("Pikachu",10,10,"Electric",10,false),
    new Pokemon("Solgaleo",137,137,["Psychic","Steel"],107,true),
    new  Pokemon("Zapdos",100,100,["Electric","Flying"],true),
    new  Pokemon("Marshadow",147,147,["Fighting","Ghost"],147,true),
    new Pokemon("Machamp",100,100,"Fighting",100,false),
    new  Pokemon("Rapidash",100,100,"Fire",100,false)
];

//for(var i =0; i<PokemonArray.length;i++){
   // PokemonArray[i].talk();
// }

function hurt (pain){
    pain = prompt("Hurt the pokemon how much?");
    var randomting = Math.floor(Math.random()*6);
   PokemonArray[randomting].HP= PokemonArray[randomting].HP-pain;

}
function createPokemon(){
    var N = prompt("Whats the pokemons name?");
    var H = prompt("What is its HP? " );
    var T = prompt("What type is it? ");
    var D = prompt("Whats its Defence? ");
    var L = prompt("is it legendary? ");

    return new Pokemon(N,H,T,D,L);
}
function removePokemon(){
PokemonArray.pop(Math.floor(Math.random()));
}

function PokemonBattle(){
    var firstPokemon = PokemonArray[ Math.floor(Math.random()*6)];
    var secondPokemon = PokemonArray[Math.floor(Math.random()*6)];
    var xA= 0;
    var yB=0;
if(firstPokemon.Atk>secondPokemon.Atk){
    xA++;
}
else if(secondPokemon.Atk>firstPokemon.Atk){
    yB++;
}
if(firstPokemon.HP>secondPokemon.HP){
    xA++;
}
else if(secondPokemon.HP>firstPokemon.HP){
    yB++;
}
if(firstPokemon.Defence>secondPokemon.Defence){
    xA++;
}
else if(secondPokemon.Defence>firstPokemon.Defence){
    yB++;
}
if(firstPokemon.Legend&& !(secondPokemon.Legend)){
    xA++;
    xA++;
}
else if(secondPokemon.Legend && !(firstPokemon.Legend)){
    yB++;
    yB++;
}
if(xA>yB){
    console.log(firstPokemon.Name+" Beat "+secondPokemon.Name);
}
else
if(yB>xA){
    console.log(secondPokemon.Name+" Beat "+ firstPokemon.Name);
}
else
{
    console.log(firstPokemon.Name+" and "+secondPokemon.Name+" TIED?!?!");
}


}
PokemonBattle();

