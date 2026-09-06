function additionnerTout(...args) {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;

}

console.log(additionnerTout(10, 10, 10, 10, 10, 10, 10, 10, 10, 10));

