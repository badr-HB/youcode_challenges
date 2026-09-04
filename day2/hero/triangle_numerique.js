const prompt = require('prompt-sync')();
const input = prompt('entrer un nombre: ');
let i, j;
let take =0;

for (i = 1; i < input; i++) {
    for (j = 1; j < i; j++) {
        take = i;
        process.stdout.write(`${take}`);
    }
    console.log("");
    
}