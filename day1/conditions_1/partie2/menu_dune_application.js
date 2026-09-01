const prompt = require('prompt-sync')();
console.log('1 → Afficher le profil\n2 → Afficher les paramètres\n3 → Afficher les notifications\n4 → Se déconnecter');

const menu = prompt('votre choix? ')
let choix;

 switch(menu){
    case '1': choix = 'Ouverture de profil...';break;
    case '2': choix = 'Ouverture des paramètres...';break;
    case '3': choix = 'Ouverture des notifications...';break;
    case '4': choix = 'déconnecte...';break;
    default: choix = 'choix invalid';
 }
 console.log(choix);
 
 