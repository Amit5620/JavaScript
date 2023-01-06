let str = 'You cannot end a sentence with because because because is a conjunction'
let print_str = 'because because because';
let index = str.indexOf(print_str);
let len = print_str.length;
console.log(str.substr(index , len));