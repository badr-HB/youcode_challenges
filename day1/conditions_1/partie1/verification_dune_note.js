const prompt = require('prompt-sync')();
const Note = prompt('ecrire un note: ');

if (Note < 0 || Note > 20) {
    console.log('note invalide');
}

else {
    if (Note >= 10) {
        console.log('Admis');
    }
    else {
        console.log('Non Admis');
    }
}