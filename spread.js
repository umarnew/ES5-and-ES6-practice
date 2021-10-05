function sum(x, y, z, a) {
  return x + y + z + a;
}

const numbers = [1, 2, 3, 4];
let numbers2 = [...numbers, 6, 7];

console.log(sum(...numbers));
console.log(numbers2);
