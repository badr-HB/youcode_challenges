const prompt = require('prompt-sync')();
let price;

let Num_prix, moyenne, max_pri = 0, min_pri = 0;
let count = 0, total = 0, test = 1;

while (price != 0) {
    price = Number(prompt('Prix: '));

    if (test != 0) {
        max_pri = price;
        min_pri = price;
        test = 0;
    }

    if (price == 0) {
        break;
    }
    else {
        total = total + price;
        count++;
        if (price > max_pri) {
            max_pri = price
        }
        if (price < min_pri) {
            min_pri = price
        }
    }
}
moyenne = total / count;

console.log("Nombre de produits : ", count);
console.log("Total : ", total, " DH");
console.log("Prix moyen : ", moyenne, " DH");
console.log("Plus cher : ", max_pri, " DH");
console.log("Moins cher : ", min_pri, " DH");

