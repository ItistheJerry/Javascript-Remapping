console.log("\n********* Immediately invoked function expressions (IIFE) *********\n");

// when a file only has a databae connection and we require it to just start as we invoke;

(function ai(){
    console.log(`DB CONNECTED`);
})();

// to type iife

// the first parenthesis is defination of function and second one is excecution, as just after the function

// global scope polution the variable pollution removal leads to iife is invoked


// ( () => {
//     console.log(`DB CONNECTED TWO`);
    
// } ) () // outups error


( function blow() { // named IIFE
    console.log(`DB CONNECTED TWO`);
    
}) ();

( () => {
    console.log(`DB CONNECTED THREE`);
    
}) ();

( (name) => { // UNNAMED IIFE WITH PARAMETER
    console.log(`DB CONNECTED FOUR ${name}`);
    
}) ("JERRY");
