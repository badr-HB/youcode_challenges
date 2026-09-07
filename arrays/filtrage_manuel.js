function filtrerPairs(tab) {
    let array = [];
    let j =0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 == 0) {
            array[j] = tab[i];
            j++;
        }
    }
    return array;
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6]));
