var person = {
  firstName: "Umar",
  lastName: "Abdullah",
  age: 22,
  set setAge(newAge) {
    this.age = newAge;
  },
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.name);

("strict mode");

person.setAge = 23;
console.log(person.age);
