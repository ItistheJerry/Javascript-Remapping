console.log("\n++++++++++************ -:- ITERATIONS -:- ++++++++++************\n ");
console.log("\n++++++++++************ FOR ++++++++++************\n");

for (let i = 0; i <= 50; i++) { // Declaration ; Condition check ; Increase the I = as condition checks get inside and increment then repeat
    const element = i;
    if (element == 4){
        console.log(" I am a Mulank 4 ");
        
    }
    console.log(element);
}
// After initialization ; conditionif true call ; before ending index value is increased and the condition is checked again
// If checking failed the loop exits
// Instead of index any variable can be used [i] majorly
// Element access isn't outside of scope;
// 


for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) { // here no i as it is inside it
        // console.log(`Inner loop value: ${j} And inner Loop: ${i}`);
        // MULTIPLICATIOM
        console.log(i + '*' + j + ' = ' + i * j);
    }
}
// after every outer loop entire inner loop runs and then incremented and runs inner again

console.log("\n++++++++++************ WHILE ++++++++++************\n");






console.log("\n++++++++++************ DO WHILE ++++++++++************\n");
