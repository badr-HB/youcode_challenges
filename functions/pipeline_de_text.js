function nettoyerEspaces(texte) {
    return texte.trim();
}

function mettreEnMajuscule(texte) {
    return texte.toUpperCase();
}

function ajouterPrefixe(texte, prefixe = "LOG:") {
    return "LOG: " + texte;
}
function traiterMessage(texte, ...args) {
    args.forEach((arg) => {
        texte = arg(texte)
    })
    return texte;
}

console.log(traiterMessage("             testing  this                            ",nettoyerEspaces, mettreEnMajuscule, ajouterPrefixe));
