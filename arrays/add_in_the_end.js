function ajouterALaFin(tab, element) {
    let i = tab.length;
    tab[i] = element
    return tab;
}

console.log(ajouterALaFin([1, 2, 3], 15));
