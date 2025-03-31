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

// used in shopping cart
// like we dont know number of arguments arriving so we keep the parameters ready

// rest operator is same as spread operator but is defined as by usecase
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 400, 500, 2000, 4000, 5000));


// in the scenerio of below;
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 400, 500, 2000, 4000, 5000));
// output is [400, 2000, 4000, 5000]
// as the value 200 and 400 is stored in val1 and val2

// objects functions

const user = {
    username: "Jerry",
    price: "Not Possible"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({// passing direct object
    username: "Bam",
    price: 399
})

// array functions

const mynewArray = [200, 400, 500, 2000, 4000, 5000]

// now define a function that accesses the array and passes its second value;
function returnValue2(getArray){
    return getArray[1]
}
console.log(returnValue2(mynewArray));

console.log(returnValue2([300, 600, 700, 900]));
