const formatter = () => {
    let value = "DH";
    return value;
}

function convertirMontant(montant, taux,callback) {
    let box = callback();
    return `${montant*taux} ${box}`;
}


let func = convertirMontant(100,10.5,formatter);

console.log(func);
