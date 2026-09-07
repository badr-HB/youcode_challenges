function compterCaracteres(chaine) {
    let i = 0;
    if (typeof(chaine) == "number") {
        return 0;
    }
    else {
        for (const chain of chaine) {
            i++;
        }
        return i;
    }
}
console.log(compterCaracteres(" mirage "));

