let num = 10;
let str = '10';

if (typeof(num)==typeof(str)) {
  console.log('exactly equal');
} else {
  console.log('Not equal');
  num = num.toString();
}

if (typeof(num)==typeof(str)) {
  console.log('exactly equal');
} else {
  console.log('Not equal');
}