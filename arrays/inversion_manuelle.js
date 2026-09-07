function inverserTableau(tab) {
    let i = tab.length;
    let k = 0;
    let box = [];
    for (let j = i - 1; j >= 0; j--) {
        box[k] = tab[j];
        k++;
    }

    return box;
}

console.log(inverserTableau([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
