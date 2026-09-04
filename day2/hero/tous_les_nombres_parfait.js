const prompt = require('prompt-sync')();
const input = Number(prompt('N : '));
let i, somme, j ;

for (i = 1; i <= input; i++) {
    somme = 0;
    for (j = 1; j <= i/2; j++) {
        if (i % j == 0) {
            somme += j;
        }
    }
    if (somme == i) {
        console.log('nombre : '+i);
    }
}
console.log('Nombres parfaits : ');

