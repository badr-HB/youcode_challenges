const prompt = require('prompt-sync')();
let N = prompt('entrer un nombre: ');
let i = N;
let fois = 1;

while(i>0){
    fois *= i;
    i--;
}
console.log('resulta: '+fois);
