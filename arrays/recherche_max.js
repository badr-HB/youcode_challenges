function trouverMax(tab) {
    let max = tab[0];
    for (i = 0; i < tab.length; i++) {
        if (max < tab[i]) {
            max = tab[i];
        }
    }
    return max;
}
console.log(trouverMax([12, 45, 7, 89, 23]));
