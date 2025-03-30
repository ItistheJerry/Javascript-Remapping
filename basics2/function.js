// simple way to make code resuable;
console.log("\n++++++++++++++++++++**************** Functions1 ++++++++++++++++++++****************\n");

console.log("J");
console.log("e");
console.log("r");
console.log("R");
console.log("Y");
// to do this individually instead we use function

function myName(){ // intialisation
    console.log("J");
    console.log("e");
    console.log("r");
    console.log("R");
    console.log("Y");
}

myName // reference

myName() // execute


function addition(num1, num2){ // num1 and these data is called parameters and 
//      num3 = num1 + num2;
//      console.log(num3);
        console.log("Result:", num1 + num2);
}

function subtraction(num1, num2){ // num1 and these data is called parameters and 
            // console.log(num1 - num2); instead
            let result = num1 - num2;
            return result
            // after reutn no code will be executed;
}

addition(4, 5); // these value passed for to be filled in parameters are called arguments;
const result = subtraction(54, 22);
console.log("Result:", result);



function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Username is empty, so please! Okay");
    //     return
        
    // }
    if(!username){
        console.log("Username is empty, so please! Okay");
        return
        
    }
    return `${username} just logged in!, Welcome Master!`
}

console.log(loginUserMessage("Jerry"));




console.log("\n++++++++++++++++++++**************** Functions2 ++++++++++++++++++++****************\n");

