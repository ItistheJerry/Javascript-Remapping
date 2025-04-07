console.log("\n++++++++++************ -:- ITERATIONS -:- ++++++++++************\n ");
console.log("\n++++++++++************ FOR ++++++++++************\n");

// for (let i = 0; i <= 50; i++) { // Declaration ; Condition check ; Increase the I = as condition checks get inside and increment then repeat
//     const element = i;
//     if (element == 4){
//         console.log(" I am a Mulank 4 ");
        
//     }
//     console.log(element);
// }
// After initialization ; conditionif true call ; before ending index value is increased and the condition is checked again
// If checking failed the loop exits
// Instead of index any variable can be used [i] majorly
// Element access isn't outside of scope;
// 


let myArray = ["Bilbo", "Batman", "Steve", "Doctor Doom"];
console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}


// Small Keywords
// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("SomeThing is Off, Mayday!!!, Continue!!");
        // break; // breaks the loop 
        continue; // continues after detecting
    }
    console.log(`Value of i is: ${index}`);
}




// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) { // here no i as it is inside it
//         // console.log(`Inner loop value: ${j} And inner Loop: ${i}`);
//         // MULTIPLICATIOM
//         console.log(i + '*' + j + ' = ' + i * j);
    // }
// }
// after every outer loop entire inner loop runs and then incremented and runs inner again

console.log("\n++++++++++************ WHILE ++++++++++************\n");
// let i = 5
// while (i == 5) {
//     console.log("Comone Man!!");
// }
// console.log("Was not right!"); //. will produce infinite loop



let index = 0
while (index <= 10) {
    console.log(`Value of index is: ${index}`); // this will make it go to infinite as well, to solve it we need to go for increment or decrement
    index = index + 2
}

// medeling with Arrays

let myBarray = ["Bilbo", "Batman", "Steve", "Doctor Doom"];
let brr = 0 // what and how to increment
while (brr < myBarray.length){ // not increment as used with .length
    console.log(`\n Value of brr: ${brr} is: ${myBarray[brr]}`);
    brr = brr + 1 // now we do increment
}



console.log("\n++++++++++************ DO WHILE ++++++++++************\n");

let score = 1 // if value is 11 then as well it will print the blah and score but then it will end as the condiiton is checked

do { // first the code will run and after the condition is checked atleast once is used
    console.log("Blah Blah Blah!!!!!!");
    console.log(`Score is: ${score}`);
    score++
} while (score <= 10);

// not much used very rare!
