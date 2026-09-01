const prompt = require('prompt-sync')();
console.log('1 → Lundi\n2 → Mardi\n3 → Mercredi\n4 → Jeudi\n5 → Vendredi\n6 → Samedi\n7 → Dimanche');

const jour = +prompt('votre choix? ');
let res;

switch(jour){
    case 1 : res = 'Lundi';break;
    case 2 : res = 'Mardi';break;
    case 3 : res = 'Mercredi';break;
    case 4 : res = 'Jeudi';break;
    case 5 : res = 'Vendredi';break;
    case 6 : res = 'Samedi';break;
    case 7 : res = 'Dimanche';break;
    default: res = 'Numéro invalide.';
}
console.log(res);
