const prompt = require('prompt-sync')();
const input = +prompt('debut: ');
const input2 = +prompt('fin: ');
let i, j, count;
let somme = 0;

function premier() {
    for (i = input; i <= input2; i++) {
        count = 0;
        for (j = 1; j <= i; j++) {
            if ((i % j) == 0) {
                count++;
            }
        }
        if (count == 2) {
            somme += i;
            console.log(i);
        }
    }
    console.log('total des nombres est : ' + somme);
}

if (input >= input2) {
    console.log("number is too high");
}
else {
    console.log('Numbres premiers:');
}
premier();