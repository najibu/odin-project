var total = 0; 

for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += 1;
  }
}

console.log('The sum of the multiples of 3 and 5 up to 1000 is ' + total);