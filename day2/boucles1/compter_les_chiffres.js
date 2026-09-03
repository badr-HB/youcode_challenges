const prompt = require('prompt-sync')();
let nombre = +prompt('insurt a numbre: ');
let count = 0;

while (nombre >= 1) {
    nombre /= 10;
    count++;
}

if (nombre === 0) {
    console.log('Nombre de chiffres : 1');
}

if (count) {
    console.log('Nombre de chiffres : ' + count);
}

