const prompt = require('prompt-sync')();
const nombre = prompt('give a number: ');
let i = 0;

while(i<=nombre){
    if(i**2 > 100){
        console.log('Résultat : '+i);
        break;
    }
    i++;
}