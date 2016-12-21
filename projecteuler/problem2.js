var first = 1, second = 2, sum = 2, total = 0; 

while (first < 4000000) {
  if (sum % 2 === 0) {
    total += sum; 
  }
  sum = first + second; 
  first = second; 
  second = sum;
} 

console.log(total);