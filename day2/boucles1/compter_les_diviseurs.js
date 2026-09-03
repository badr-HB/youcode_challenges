const prompt = require('prompt-sync')();
const nb = prompt("entrer un nombre: ");
let i;

for (i = 0; i <= nb; i++) {
    if (nb % i === 0) {
        console.log("results: " + i);
    }
}