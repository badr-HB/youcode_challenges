const prompt = require('prompt-sync')();
const nombre = prompt('saissez votre nombre: ');
let i;
let somme_imp = 0,somme_pai = 0;

for (i = 1; i <= nombre; i++) {
    if(i%2 == 0){
        somme_pai += i;
    }
    else{
        somme_imp += i;
    }
}

console.log("N = "+nombre);
console.log('Somme des pairs : '+somme_pai);
console.log('Somme des impairs : '+somme_imp);


