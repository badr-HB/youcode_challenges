const prompt = require('prompt-sync')();
let input;

let count = 0, somme = 0, max = 0, min = 0, posi = 0, nega = 0, trie = 1;

while (input != 0) {
    input = Number(prompt('saisie un nombre: '));

    if (trie == 1) {
        max = input;
        min = input;
        trie--;
    }

    if (input != 0) {
        count++;
        somme += input;
        if (input > max) {
            max = input;
        }
        if (input < min) {
            min = input;
        }
        if (input > 0) {
            posi++;
        }
        if (input < 0) {
            nega++;
        }
    }

    if (input == 0) {
        break;
    }

}
console.log('Nombre des valeurs: ' + count);
console.log('Somme: ' + somme);
console.log('Moyenne: ' + (somme / count));
console.log('Plus grand: ' + max);
console.log('Plus petit: ' + min);
console.log('Positif: ' + posi);
console.log('Negatif: ' + nega);
