const prompt = require('prompt-sync')();
const nb = prompt('give a number: ');
let somme = 0;

for(i=0;i<=nb;i++){
    somme += i;
}
console.log("results: "+somme);
