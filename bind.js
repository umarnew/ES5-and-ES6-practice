let c1 = {
  x: 10,
  y: 20,
};

function printCoordinates() {
  console.log(this.x, this.y);
}

c1_print = printCoordinates.bind(c1);
c1_print();

//10 20
