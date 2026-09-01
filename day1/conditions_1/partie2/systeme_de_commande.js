const prompt = require('prompt-sync')();
console.log('1 → Pizza\n2 → Burger\n3 → Tacos\n4 → Salade');
const choix = +prompt('votre choix : ');
const quantite = +prompt('combien : ');
let prix_uni;
let reduction;
let food;
let totalpayer;

switch (choix) {
    case 1: prix_uni = 60; food = 'Pizza'; break;
    case 2: prix_uni = 45; food = 'Burger'; break;
    case 3: prix_uni = 40; food = 'Tacos'; break;
    case 4: prix_uni = 30; food = 'Salade'; break;
    default: console.log('inconnu'); break;

}
let total = (prix_uni * quantite)

if (total >= 200) {
    reduction = total * 10 / 100;
}

totalpayer = total - reduction

console.log("Choix : " + choix);
console.log("Quantite : " + quantite);
console.log("Plat : "+food);
console.log('Prix unitaire :'+prix_uni);
console.log('Sous-total : '+total);
console.log('Réduction : '+reduction);
console.log('Total à payer : '+totalpayer);








