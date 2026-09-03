const prompt = require('prompt-sync')();
const nb = prompt('entrer un nombre: ');
let i;
let count = 0;

for (i = 1; i <= nb; i++) {
    if (nb % i === 0) {
        count++;
    }
}
if (count > 2 || count < 2) {
    console.log(`${nb} n'est pas un nombre premier.`);

}
else {
    console.log(`${nb} est un nombre premier.`);

}