// ARRAY;

const myArray = [0, 4, 3, 5, 2]; // each single is an element can be anything symbol, char, numbers etc
// array elements can't be accessed with using arbitary strings;

console.log(myArray); // yes  

// shallow copy;
// of an object whose property share the same references

// deep copies
// properties do not share the same method;


const heroes = ["Chaha choudhary", "babu bhaiya"];

const myArr2 = new Array(1, 5, 6, 22, 53);

console.log(heroes, myArr2);
// console.table(heroes, myArr2);


console.log(myArr2.length);



// Array Methods;

myArray.push(7);
myArray.pop();

myArray.unshift(9);
myArray.shift();

console.log(myArray.includes(9));
console.log(myArray.indexOf(9)); // -1 = does not exist
// console.log(myArray.);

const nreArr = myArray.join()

console.log(myArray);
console.log(nreArr);


