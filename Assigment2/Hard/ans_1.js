let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

let count = 0;
let substr = '';

for (let i = 0; i < string.length; i++) {
  if (string[i]==' ' || string[i]=='.') {
    if (substr=='Love' || substr=='love') {
      count=count+1;
    }
    substr='';
  }else{
    substr+=string[i];
  }
}

console.log(count);