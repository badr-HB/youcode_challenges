const prompt = require('prompt-sync')();
let number = Number(prompt('entrer un nombre palindrome: '));
let box = 0, holder = 0, container = number;

while (number >= 1 || number <= -1) {
    box = number % 10;
    holder = holder * 10 + box;
    number = (number - box) / 10;
}

if (holder === container) {
    console.log(`${holder} palindrome`);
}
else {
    console.log(`${holder} pas palindrome`);
}
