// for of 
console.log("\n+++++++********* FOR OF ++++++++********\n");


["", "", ""]
[{}, {}, {}] // objects in arrays and get the infi via .notation and square notation

//

const arr = [1, 2, 3, 4, 5];

for (const num of arr) { // element is itereator, objects are iterable -:- object here means loop on what 
    console.log(num);
}


const greetings =  "JerryJain"//["Balle", "Jai Jinendra"];
for (const greet of greetings) {
    console.log(`\nEach Char is: ${greet}\n`);
    
    
}

 // MAPS
 console.log("\n+++++++********* MAPS ++++++++********\n");

 const map = new Map() // object itself
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('FR', "France")

 console.log(map);

// loop

// for (const key of map) { // printed array
//     console.log(key);
    
// }

// to do differently

for (const [key, value] of map) { // printed array
    console.log(key, ':-' , value);
} 

// OBBJECT case

const myObj = {
    game1: 'NFS',
    game2: 'GTAV',
    game3: 'SpiderMan'
} 

// the obj is not iterable - the key value pair will not be printed = Reason {}
// Where as maps are iterable
// using loop on the obj

// for (const [key, value] of myObj) {
//     console.log(key);
// }
 
// map is a key value object.
// can use with strings, numbers, unlike object it remembers the order
// core diff is original values no duplicate

console.log("\n+++++++********* OBJECTS ++++++++********\n");


const myObj1 = {
    js: "Javasript",
    cpp: "C++",
    py: "Python",
}

console.log("\n+++++++********* FOR-IN ++++++++********\n");

// For In
// for (const key in myObj1) {
//     console.log(myObj1[key]);// key anf value
        
// }

for (const key in myObj1) {
    console.log(`${key} Shortcut is for ${myObj1[key]}\n`);// key anf value
        
}

const programming = ["Js", "Cpp", "Py"];

for (const key in programming) {
    console.log(key, programming[key]);
    
} // yes array has keys as well

const map1 = new Map() // object itself
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('FR', "France")

for (const key in map1) {
    console.log(key);
    
} // here the map is not iteratable

// IMPORTANT
/*
1. Objects = ForIn
2. Arrat = ForOf and more
*/

// MOST USED LOOP

// ARRAY

// FOR EACH

console.log("\n+++++++********* FOR-EACH ++++++++********\n");

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(element => {
    
// });
// iteration and it is a higher order function 


// it is a callback function
// item as a parimeter

coding.forEach( function (val){
    console.log(val);
    
} )

// coding.forEach( function (item)  {} )

// CALLBACK

console.log("\n+++++++********* CALL-BACK ++++++++********\n");

coding.forEach( (item) => {
    // console.log(item);
    
} )

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe) // provide reference do not execute thy function


// Interesting

coding.forEach ((item, index, arr)=> {
    console.log(item, index, arr);
    
});

// every item has an index and access to the whole arr

// arr has many object // can have

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    },
    {
        languageName: "C++/C Plus Plus",
        languageFileName: "Cpp/c++"
    }
];

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )
