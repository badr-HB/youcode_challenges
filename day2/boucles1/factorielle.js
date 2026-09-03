const prompt = require('prompt-sync')();
let N = prompt('entrer un nombre: ');
let i;
let fois = 1;

for (i = N; i > 0; i--) {
    fois *= i;
}
console.log('resulta: ' + fois);
