const prompt = require('prompt-sync')();
const N = prompt('Number: ');
let i;

console.log("resultat: ");

for (i = 1; i <= N; i++) {
    if (i % 2 == 0) {
        console.log(i);

    }
}