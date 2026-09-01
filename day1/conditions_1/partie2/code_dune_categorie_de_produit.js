const prompt = require('prompt-sync')();
console.log('A → Électronique → Smartphone\nB → Vêtements → T-shirt\nC → Alimentation → Pain\nD → Maison → Chaise\nE → Sport → Ballon');

const produit = prompt("votre choix? ")
let choix;

switch (produit.toUpperCase()) {
    case 'A': choix = 'Électronique'; break;
    case 'B': choix = 'Vêtements'; break;
    case 'C': choix = 'Alimentation'; break;
    case 'D': choix = 'Maison'; break;
    case 'E': choix = 'Sport'; break;
    default: choix = 'inconnue';
}

console.log(`Code : ${produit.toUpperCase()}`);
console.log(`Catégorie : ${choix}`);



