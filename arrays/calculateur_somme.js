function calculerSomme(tab){
    let somme = 0;
    for(let i=0;i<tab.length;i++){
        somme += tab[i];
    }
    return somme;
}

console.log(calculerSomme([5, 10, 15]));
