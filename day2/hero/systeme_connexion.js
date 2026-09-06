const prompt = require('prompt-sync')();
const admin = 'admin';
const pass = 123456789;

let user;
let password;
let count = 3;

while (count != 0) {
    user = prompt('insert name: ');
    password = Number(prompt('insert password: '));

    if (user != admin || password != pass) {
        count--;
        console.log("Identifiants incorrects.");
        console.log("Tentatives restantes : " + count);
        if (count == 0) {
            console.log('---------------------');
            console.log("Compte temporairement bloqué.");
            break;
        }
    }
    else {
        console.log("Connexion réussie.");
        console.log("Bienvenue !");
        break;
    }
}