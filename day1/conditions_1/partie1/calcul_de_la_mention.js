const prompt = require('prompt-sync')();
const mention = prompt('ecrire une note: ')
const text = 'Mention : ';

if (mention < 0 || mention > 20) {
    console.log('notes invalid plz try again');
}
else {
    console.log(`Note : ${mention}`);

    if (mention < 10) {
        console.log(`${text}Échec`);
    }
    else if (mention >= 10 && mention <= 11.99) {
        console.log(`${text}Passable`);
    }
    else if (mention >= 12 && mention <= 13.99) {
        console.log(`${text}Assez bien`);
    }
    else if (mention >= 14 && mention <= 15.99) {
        console.log(`${text}Bien`);
    }
    else if (mention >= 16 && mention <= 17.99) {
        console.log(`${text}Très bien`);
    }
    else if (mention >= 18 && mention <= 20) {
        console.log(`${text}Excellent`);
    }
}