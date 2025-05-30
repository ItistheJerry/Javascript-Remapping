// Tells hidden and not seen information about the Object

console.log(Math.PI); //  can't be overridden

const infoOnMath = Object.getOwnPropertyDescriptor(Math, "PI")
// property on which key like From the entire Math module we need "PI" property
console.log(infoOnMath);


const main = {
    name: 'Ginger Chai Tea',
    price: 250,
    isAvailable: true,

    orderMain: function(){
        console.log("Main is not main");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(main, "name")); // Undefined because it is an Object


Object.defineProperty(main, 'name', { 
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(main, "name")); 


// Looping above:

for ([key, value] of Object.entries(main)) { // object is by default itereable is situation depended to solve it we object.entries(main)
    if (typeof value !== 'function'){
        console.log(`${key} ; ${value}`);
    } // if condition then only enumerate and our function appears then out code will not tether
    
    
}