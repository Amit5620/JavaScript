let str = 'You cannot end a sentence with because because because is a conjunction'
let pattern = /because/g;
console.log((str.match(pattern)).length);