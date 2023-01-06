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

let str = 'JavaScript';
let min = 0;
let max = str.length;
let randomindex = generateRandom(min,max);
console.log(str[randomindex]);