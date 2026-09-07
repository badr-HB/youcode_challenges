function compterVoyelles(chaine) {
    let count = 0;
    for (str of chaine) {
        if ((str == "e") || (str == "u") || (str == "o") || (str == "y") || (str == "a") || (str == "i")) {
            count++;
        }
    }
    return count;
}

console.log(compterVoyelles("developpeur"));
