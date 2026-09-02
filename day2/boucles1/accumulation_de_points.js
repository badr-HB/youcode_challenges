const prompt = require('prompt-sync')();
const nb = prompt('Nombre de missions : ');
let i=1;
let somme = 0;
while(i<=nb){
    somme += 100;
    console.log(`Mission ${i} → Score : ${somme}`);
    i++;
}