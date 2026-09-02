const prompt = require('prompt-sync')();
const nb = prompt('entre un nombre: ')
const nb2 = prompt('une autre nombre: ')
let i ;
let somme = 0;

for(i=1;i<=nb;i++){
    if(i%nb2== 0){
        console.log(i);
        somme += i;
    }
}
console.log('total des nombre '+somme);
