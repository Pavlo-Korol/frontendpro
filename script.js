function sumWithClosure() {
  let sum = 0;
  return function(num) {
    sum += num;
    return sum;
  }
}

const sum = sumWithClosure();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28

