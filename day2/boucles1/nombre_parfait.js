const prompt = require('prompt-sync')();

const input = +prompt('insert input: ');
let i;
let somme = 0;

for (i = 1; i < input; i++) {
    if (input % i === 0) {
        somme += i;
    }
}

if(somme === input){
    console.log(`${input} est un nombre parfait.`);
}
else{
    console.log(`${input} n'est pas un nombre parfait.`);
    
}
