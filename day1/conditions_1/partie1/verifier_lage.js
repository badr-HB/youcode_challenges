const prompt = require("prompt-sync")();
const age = prompt("entrer l'age: ");

if(age >= 18){
    console.log("Accès autorisé");
}
else{
    console.log("Accès refusé");
    
}