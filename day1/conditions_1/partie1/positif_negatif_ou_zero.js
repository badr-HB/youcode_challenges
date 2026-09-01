const prompt = require('prompt-sync')();
const Nombre = prompt('put Number : ')

if(Nombre > 0){
    console.log('Positif');
}
else if(Nombre < 0){
    console.log('Négatif');
}
else{
    console.log('Égal à zéro');
}