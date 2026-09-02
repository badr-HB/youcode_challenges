const prompt = require('prompt-sync')();
const input = prompt('combien des participants: '); 6
let i;

for (i = 0; i < input; i++) {
    console.log('Participant '+(i+1));
}