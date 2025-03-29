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




// methods more

// slice and splice
// slice = 


console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);
console.log(myn1);

console.log("B ", myArray);



const myn2 = myArray.splice(1, 3);
console.log("C ", myArray);
console.log(myn2);


console.log("\n+++++++++++************* ARRAY2 ****************++++++++++++++\n");



const marvel_heroes = ["Thor", "Captain america", "Spiderman", "Doom"];
const dc_heroes = ["Batman", "Superman", "Wonder women", "Flash"];


// marvel_heroes.push(dc_heroes);

console.log(marvel_heroes); // takes any type of entry data;
// took an array as an element as well;

// marvel_heroes.concat(dc_heroes);
console.log(dc_heroes);
// same output

const heroes0 = marvel_heroes + dc_heroes;

console.log(heroes0);


const allheroes = marvel_heroes.concat(dc_heroes);
console.log(allheroes);



// spread function = spreads or distributes;

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);



//

const anotherarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_arr = anotherarr.flat(Infinity); // adjusts automatically but use specific for better
console.log(real_arr);



// when in data scrapping = when data comes in node list, objects or strings but need array;

console.log(Array.isArray("Jerry")); // is this an array;
console.log(Array.from("Jerry")); // to convert = objects strings or anything;

console.log(Array.from({name: "Jerry"})); // to specify what array to make either of key or value;
// else it will be empty;


let score1 = 100;
let score2 = 200;
let score3 = 300;

// will have multiple data to convert to array to do so do this;

console.log(Array.of(score1, score2, score3)); // returns a new array from a set of elements;

// read array methods [is, from, of];



