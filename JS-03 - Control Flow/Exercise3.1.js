let xValue = 5;

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}
let num = 1;

while (num <= 100) {
  console.log(num);
  num += 2;
}
function printNumbersInBrackets(n) {
    let num = 1;
  
    while (num <= n) {
      console.log(`[${num}]`);
      num++;
    }
  }
  
  printNumbersInBrackets(6);
  function computeSum(n) {
    let sum = 0;
    let num = 1;
  
    while (num <= n) {
      sum += num;
      num++;
    }
  
    return sum;
  }
  
  console.log(computeSum(5));  
  console.log(computeSum(19));