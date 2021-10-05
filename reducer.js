let numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce(function (sumOfNumbers, currentItem) {
  //or you can write (sum, i)
  return sumOfNumbers + currentItem;
});

console.log(total);

// 15
