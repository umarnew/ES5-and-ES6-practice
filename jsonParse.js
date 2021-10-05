let sampleJson = '{"name": "Peter", "age": 22, "country": "United States"}';
let sampleJson2 = `{
    "fruits": [
        "Apple",
        "Banana",
        "Strawberry",
        "Mango"
    ]
}`;

let obj1 = JSON.parse(sampleJson);
let obj2 = JSON.parse(sampleJson2);

console.log(obj1, obj2);
console.log(obj1.name, obj2.fruits, obj2.fruits[1]);

// { name: 'Peter', age: 22, country: 'United States' } { fruits: [ 'Apple', 'Banana', 'Strawberry', 'Mango' ] }
// Peter [ 'Apple', 'Banana', 'Strawberry', 'Mango' ] Banana
