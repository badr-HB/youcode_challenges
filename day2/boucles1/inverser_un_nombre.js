const prompt = require('prompt-sync')();
let input = +prompt('Nombre: ');
let reverse = 0;
let rest = 0;

while (input !== 0) {
    rest = input % 10;
    reverse = reverse * 10 + rest;
    input = (input - (input % 10)) / 10;
}


console.log(reverse);







