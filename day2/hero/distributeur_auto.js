const prompt = require('prompt-sync')();
let input;
let solde_ini = 1000;
let retirer = 0, depo = 0;

while (input != 4) {
    console.log("1 → Retirer de l'argent\n2 → Consulter le solde\n3 → Déposer de l'argent\n4 → Quitter")
    input = Number(prompt('votre choix? '));
    if (input == 1) {
        retirer = Number(prompt('combien vous voulez tirer: '))
        if (retirer > solde_ini) {
            console.log('not enough money');
        }
        else if (retirer < 0) {
            console.log('positif nombre svp');
        }
        else {
            solde_ini -= retirer;
        }
    }
    if (input == 2) {
        console.log('votre solde ' + solde_ini);
    }
    if (input == 3) {
        depo = Number(prompt('combien vous voulez deposer: '))
        if (depo < 0) {
            console.log('positif nombre svp');
        }
        solde_ini += depo;
    }
    if (input == 4) {
        console.log('merci pour choisi notre bank');
        break;
    }
    else {
        console.log('choisi une nombre du list');
    }
}
