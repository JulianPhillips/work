var prompt = require('prompt-sync')();
var UserMon =[["NAME:","xxx" ],["TYPE:","xxx","xxxx"], ["ATK","xxx"], ["DEF","xxx"],["LGND","xxx"]];
var Charizard =[["NAME:","Charizard" ],["TYPE:","Fire","Flying"], ["ATK","200"], ["DEF","150"],["LGND","false"]];
var Umbra =[["NAME:","Umbra" ],["TYPE:","Dark"], ["ATK","90"], ["DEF","100"],["LGND","false"]];
var Raikou =[["NAME:","Raikou" ],["TYPE:","Electric"],["ATK","85"],["DEF","75"],["LGND","true"]];

function createAPokemon(){
for(var i =0; i<UserMon.length;i++){
for(var x =1; x<UserMon[i].length;x++){
UserMon[i][x] = prompt("Next data ");
}
}
}
function unloadPokemon(pokemon){
for(var i =0; i<pokemon.length;i++){
    for(var x=0; x<pokemon[i].length;x++){
        console.log(pokemon[i][x]);
    }
}
}
console.log("Type Name, Type, Attack, Def, and legendary status in that order")
createAPokemon();
unloadPokemon(Charizard);
unloadPokemon(Umbra);
unloadPokemon(Raikou);
unloadPokemon(UserMon);