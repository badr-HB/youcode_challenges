function contientElement(tab, valeur) {
    let res1 = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == valeur) {
            res1 = true;
        }
    }

    if (res1) {
        return res1;
    }
    else {
        return res1 = false;
    }

}

console.log(contientElement(["pomme", "banane"], "pomme"));
