const prompt = require('prompt-sync')();
let nb1 = +prompt('entre un nombre: ');
let op = prompt("entre un opérateur: ");
let nb2 = +prompt('entre une autre nombre: ');
let res;

switch (op){
    case '+' : res = `Résultat : ${nb1 + nb2}`;break;
    case '-' : res = `Résultat : ${nb1 - nb2}`;break;
    case '/' : res = `Résultat : ${nb1 / nb2}`;break;
    case '*' : res = `Résultat : ${nb1 * nb2}`;break;
    default: res = "Opérateur invalide";
}
switch (true){
    case nb2 === 0 && op === '/': res = 'invalid combination';
}

console.log(res);

