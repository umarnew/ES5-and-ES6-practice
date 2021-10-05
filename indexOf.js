//string

let str = "my name is umar";

substr = "ar";
console.log(str.indexOf(substr));

substr = "umar";
console.log(str.indexOf(substr));

substr = "name";
console.log(str.indexOf(substr));

//array

const beasts = ["ant", "bison", "camel", "duck", "bison", "ant"];
console.log(beasts.indexOf("duck"));
console.log(beasts.indexOf("ant"));

console.log(beasts.lastIndexOf("ant"));

// 13
// 11
// 3
// 3
// 0
//5
