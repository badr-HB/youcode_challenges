const prompt = require('prompt-sync')();
const prix = +prompt('write the price: ');

if (prix >= 500) {
    console.log(`Montant de la commande : ${prix}`);
    console.log('Livraison : Gratuite');
    console.log(`Total à payer : ${prix}`);
}
else {
    console.log(`Montant de la commande : ${prix}`);
    console.log('Livraison : 40dh');
    console.log(`Total à payer : ${prix+40}`);
}