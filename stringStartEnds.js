const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// expected output: true

console.log(str1.startsWith("nig", 9));
// expected output: true

console.log(str1.endsWith("plans"));
console.log(str1.endsWith("ans"));

//true
//true

console.log(str1.includes("nigh"));
console.log(str1.includes("night"));
console.log(str1.includes("nisadsad"));
