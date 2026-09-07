function compterLettre(chaine, lettre) {
    let count = 0;
    for (const check of chaine) {
        if(check == lettre){
            count++;
        }
    }
    return count;
}

console.log(compterLettre('badr eddine habbach','b'));
