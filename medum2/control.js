console.log("Story of If/Elsei");

// Syntax and Theory:-


// the whole code should run on conditional basis

console.log("+++++++******** IF ********++++++");

let a = 9;

if (a%2 == 0){
    console.log("It is supposed to be True if I worked");
    const isLoggedIn = true
    if(isLoggedIn){
        console.log("Logging You In");
}
    else{ // this else won't ever work
        console.log("Can't Work");
        
    }
}
else{
    console.log("It is supposes to be False if I worked");
    console.log("Can't Log You In as Answer Was False");
}




// Comparision
/*
1. <
2. >
3. <=
4. !=
5. = - assignment 
6. >=
7. == - checking if equal
8. === - type checking {example = {2 == "2"} as this comverts to string}
9. !== - strict checking
*/

temprature = 50;

if (temprature < 50){
    console.log("Less than 50");
}
else{
    console.log("Maybe not around 50");
}


const score = 300;

if(score > 299){
    const power = "Fly";
    console.log(`User Power: ${power}`); // Local / functional scope
}

// truthy and falsy values:-

// falsy :
/*
1. false
2. 0
3. -0
4. BigInt
5. 0n
6. ""
7. null
8. undefined
9. NaN
*/

// Truthy :
/*
1. "0"
2. true
3. String
4. " "
5. []
6. {}
7. function(){}
*/

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){ // here Object.keys converts keys of the object to an array and thus we can ask for length AND [ERFORM METHODS]
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1; // we recieve 2 or more options when we use firebase or appwrite and by using this operator we can take the next best option available to us 
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary Operator (?)

const icePrice = 400;

icePrice <= 80 ? console.log("Less than 80") : console.log("We have way better");

// through this operator we can use the function in one line like {condition} if true (?) log this  or (:) log this:

