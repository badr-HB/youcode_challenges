
function creerCompteur(valeurInitiale = 0) {
    return (func = () => {
        return ++valeurInitiale;
    })
}


const MonCompteur = creerCompteur(10);
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());