function generateRandom(min,max) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

let min = 50;
let max = 100;
console.log(generateRandom(min,max));