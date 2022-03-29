// Function Declerations

// function sum(a, b) {
//   let c;
//   return (c = a + b);
// }

// console.log(sum(3, 6));

// Function Expressions

let sum = function (a, b) {
  if (typeof b == "undefined") {
    b = 0;
  }
  let c;
  return (c = a + b);
};

let sumAll = function () {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

console.log(sum(2, 3));
console.log(sum(2));
console.log(sumAll(3, 4, 5, 6, 7, 8, 9));
