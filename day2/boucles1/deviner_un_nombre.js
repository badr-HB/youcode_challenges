const prompt = require('prompt-sync')();
let guess;
let numbre = 50;

while (guess !== 50) {
    guess = +prompt('Tentative : ');
    if (guess < numbre) {
        console.log('Trop petit');
    }
    else if (guess > numbre) {
        console.log('Trop grand');
    }
    else {
        console.log('Bravo !');
    }
}