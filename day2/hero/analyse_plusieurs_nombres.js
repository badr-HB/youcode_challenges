// const prompt = require('prompt-sync')();
// let input;

// let count = 0, somme = 0, moyenne = 0, max = 0, min = 0, posi = 0, nega = 0;

// while (input != 0) {
//     input = Number(prompt('saisie un nombre: '));
//     if (input == 0) {
//         break;
//     }
//     else if(){

//     }
// }
const prompt = require('prompt-sync')();
const array = [];
let input, i = 0, j=0;

console.log('type 0 to cancel\n');


do {
    input = prompt('entre un fruit: ')
    if (input != 0) {
        array[i] = input;
        i++;
    }

} while (!(input == 0))

console.log(array);

do{

}while()