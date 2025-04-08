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
 map.set('USA')
// map is a key value object.
// can use with strings, numbers, unlike object it remembers the order
// core diff is original values no duplicate

