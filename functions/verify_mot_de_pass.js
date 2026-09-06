function verifierMotDePasse(motDePasse) {
    let test = motDePasse.includes("@");

    if ((motDePasse.length - 1 <= 8) && test == false) {
        return false
    }
    if ((motDePasse.length - 1 >= 8) && test == true){
        return true
    }
    
}


console.log(verifierMotDePasse("code@1234"));
