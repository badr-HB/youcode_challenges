const prompt = require('prompt-sync')();
const input = prompt('entrer N: ');
let box = 0;
let count = 0;
let container = 0;
let a=0,b=1,c;

// for (let i = 0; i < 10; i++) {
//     box += i;
//     console.log(box);
//     box = box - container;
//     container = i;
// }


for(let i=0;i<input;i++){
    if(i<=1){
        c=i;
    }
    else{
        c=a+b;
        a=b;
        b=c;
    }
    console.log(c);
    
}