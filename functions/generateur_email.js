function genererEmail(prenom, nom) {
    let results1 = prenom.toLowerCase();
    let results2 = nom.toLowerCase();
    return `"${results1}.${results2}@gmail.com"`
}

console.log(genererEmail("hABbacH","badREDdine"));
