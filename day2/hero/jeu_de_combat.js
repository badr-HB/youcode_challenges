const prompt = require('prompt-sync')();

let player_HP = 100;
let monster_HP = 100;
let attack = 0;
let count = 1;

while (player_HP > 0 && monster_HP > 0) {
    console.log('1 → Attaque faible\n2 → Attaque forte\n3 → Soin');
    console.log('player HP left: ' + player_HP);
    console.log('monster HP left: ' + monster_HP);

    attack = Number(prompt(''));

    switch (attack) {
        case 1: monster_HP -= 15; player_HP -= 20; break;
        case 2: monster_HP -= 30; player_HP -= 20; break;
        case 3: switch (count) {
            case 0: console.log('no more potions'); break;
            default: player_HP += 20; count--; console.log('you still have ' + count + ' potion'); break;
        }; break;
        default: console.log('entrer une number de list');
    }

    if (player_HP <= 0) {
        console.log("Game Over !\nLe monstre a gagné.");
    }
    if (monster_HP <= 0) {
        console.log("Victoire !\nVous avez vaincu le monstre.");
    }

}