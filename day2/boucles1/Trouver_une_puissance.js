const prompt = require('prompt-sync')();
const base = prompt('entrer la base: ');
const exposant = prompt('entrer l`exposant: ');
let i=0;
let fois = 1;

while(i<exposant){
    fois *= base;
    i++;
}

console.log('resultat: '+fois);
