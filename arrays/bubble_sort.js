function trierTableau(tab) {
    let change = 0;
    let taille = tab.length;

    for (let i = 0; i < taille; i++) {
        for (let j = 0; j < (taille - i); j++) {
            if (tab[j] > tab[j+1]) {
                change = tab[j+1];
                tab[j+1] = tab[j];
                tab[j] = change;
            }
        }
    }
    return tab;


}

console.log(trierTableau([5, 3, 8, 1, 2,45,5,10,-58,-99,103,254,8,75,96,33,410,2015]))