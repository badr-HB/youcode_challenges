
function inverserChaine(chaine) {
    let i = 0;
    let array = [];

    for (box of chaine) {
        i++;
    }
    for (box of chaine) {
        while (i != 0) {
            array[i - 1] = box;
            i--;
            break;
        }
    }

    return array.join("")
}

console.log(inverserChaine("libya"));

