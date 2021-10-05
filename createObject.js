let person = {
  isHuman: false,
  printIntro: function () {
    console.log(`my name is ${this.name} and I am human ${this.isHuman}`);
  },
};

const me = Object.create(person);
person.name = "umar";
person.printIntro();
