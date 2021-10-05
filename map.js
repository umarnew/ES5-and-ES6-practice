let users = [
  {
    firstName: "john",
    lastName: "sherif",
  },
  {
    firstName: "john",
    lastName: "sherif",
  },
  {
    firstName: "john",
    lastName: "sherif",
  },
];

let numbers = [2, 3];

let fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
let double = numbers.map((number) => number * 2);

console.log(fullNames);
console.log(double);

// [ 'john sherif', 'john sherif', 'john sherif' ]
// [ 4, 6 ]
