let forSumArray = [1, 2, 3, 4, 5, 6];

//console.log(rest);

function sum(...myArray) {
  return myArray.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
