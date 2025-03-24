// 2 types

// Primitive

// 7 types

/*
1. String;
2. Number;
3. Boolean;
4, Null;
5. Undefined;
6. Symbol;
7. BigInt;
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = false;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 345567898765456789; // 3.45567898765456789


// const bigNumber = 345567898765456789n; // now it is a bigInt = 345567898765456789




// Reference (Non Primitive);


// Array, Objects, Functions;


const heros = ["Jerry", "Samyak", "God"];
let myObj = {
    name: "Jerry",
    age: 21,
}

console.table(myObj);
console.table(heros);

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof anotherId);



// https://262.ecma-international.org/5.1/#sec-11.4.3;
