function supprimerDoublons(tab) {
    let array = [];
    let k = 0;
    for (let i = 0; i < tab.length; i++) {
        for (let j = i + 1; j < tab.length; j++) {
            if (tab[i] == tab[j]) {
                tab[j] = "double";
            }
        }
    }

    for (let i = 0; i < tab.length; i++) {
        if (typeof (tab[i]) === "number") {
            array[k] = tab[i];
            k++;
        }
    }

    return array;
}

console.log(supprimerDoublons([1, 2, 2, 3, 4, 4, 1, 5,2,3,5,4,1,5,7,8,7,7,7,9,4,5,6,2,1,3,3,2,5,6,8,7,4,5,9,1,2,0,3,6,-1,9,7,5,4,1,2,0,0,0,2,4,5,8,7,4,9,6,3,2,5,8,7,4,0,2,-1,4,5,8,7,9,6,3,2,5,4,7,0,1,2,5,4,7,8,5]));
