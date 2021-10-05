const isEven = (element) => element % 2 == 0;
let arr1 = [2, 4, 3];

console.log(arr1.every(isEven));
console.log(arr1.some(isEven));

//false
//true
