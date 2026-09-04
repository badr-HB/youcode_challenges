const prompt = require('prompt-sync')();
const input = prompt('N: ');

let i, j;

for (i = 1; i <= input; i++) {
    for (j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log("___________________________________");
    
}