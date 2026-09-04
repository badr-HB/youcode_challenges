const prompt = require('prompt-sync')();
let input = +prompt(`entrer un chiffre: `);
let somme = 0;
let mode = 0;

while (input >= 1 || input <= -1) {
    mode = input % 10;
    somme += mode;
    input = (input - (input % 10)) / 10;
    
}
console.log('results: ' + somme);
