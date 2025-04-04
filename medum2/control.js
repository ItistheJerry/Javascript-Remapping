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

