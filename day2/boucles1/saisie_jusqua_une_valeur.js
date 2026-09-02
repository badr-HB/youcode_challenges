const prompt = require('prompt-sync')();
let count = 0;
let somme = 0;

while (true) {
    const input = +prompt('Saisie un nombre: ');
    if (input !== 0) {
        count++;
        somme += input;
    }
    else{
        break;
    }
}

console.log('Nombre de valeurs : ' + count);
console.log('Somme: ' + somme);
