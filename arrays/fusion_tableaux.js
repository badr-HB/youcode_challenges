function fusionnerTableaux(tab1, tab2) {
    let array = [];
    let k = 0;
    for (let i = 0; i < tab1.length; i++) {
        array[i] = tab1[i];
        k++;
    }
    for (let i = 0; i < tab2.length; i++) {
        array[k] = tab2[i];
        k++;
    }
    return array;
}

console.log(fusionnerTableaux([1, 2,5,89,2,102,3,47], [3,5,1,18,75,30,6,9,14]));
