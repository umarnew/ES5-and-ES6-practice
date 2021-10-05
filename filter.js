let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

let positiveNumbers = numbers.filter(function (number) {
  return number > 0; //(return condition)
});

let positiveNumbers1 = numbers.filter((number) => number > 0);

console.log(positiveNumbers);
console.log(positiveNumbers1);

// [ 1, 5, 12, 19, 20 ]
