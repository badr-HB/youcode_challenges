const prompt = require('prompt-sync')();
console.log('1 → Bus\n2 → Train\n3 → Tramway\n4 → Taxi\n5 → Vélo');
const num = +prompt('entrer une nombre : ');
let prix;
let trans;
let display = true;

switch (num) {
    case 1: trans = 'Bus'; prix = 5; break;
    case 2: trans = 'Train'; prix = 20; break;
    case 3: trans = 'Tramway'; prix = 6; break;
    case 4: trans = 'Taxi'; prix = 15; break;
    case 5: trans = 'Vélo'; prix = 10; break;
    default: console.log('Transport invalide');display = false;
}

switch (display){
    case true : console.log(`Choix : ${num}\nTransport : ${trans}\nPrix : ${prix} DH`);break;
    default:break;
}

