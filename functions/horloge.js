function time(){
    const time = new Date().toLocaleTimeString();
    return time;
}

console.log(`"${time()}"`);
