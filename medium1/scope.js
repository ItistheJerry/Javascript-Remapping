console.log("\n++++++++++++*********** Globale Scope ***************+++++++++\n");

let a = 300

// var != {} curly braces is scope when compes with function or if else
if (true) {
    let a = 1
    const b = 3
    console.log("Inner: ", a);
    
}
// this data inside if condiiton is block or local scope and outside is global scope.

// console.log(a);
console.log(a); // var works not in scope
// console.log(c);

// scope = in windows *[in browser inspect scope is different thant node environment scope in ide's]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }


console.log("\n++++++++++++*********** Local Scope ***************+++++++++\n");

if (true) {
    let a = 1
    const b = 3
    console.log("Inner: ", a);
    
}

console.log(a);



console.log("\n++++++++++++*********** Scope Workings and Methods ***************+++++++++\n");


// nested function scopes
// closers = techniques = {Need to Learn Dom} = 

function one() {
    const username = "Jerry"

    function two() { // inheritence works = {true}
        const website = "YouTube"
        console.log(username);
        
    }
    // console.log(website);
    // console.log(two.website); // undefined
    

    two()
    
}
one()


// scope in if/else

if(true){
    const username = "Jerry"
    if(username === "Jerry"){
        const website = " Google"
        console.log(username + website);
        
    }
    // console.log(website); // can't access because of being outside of scope
    
}
// console.log(username); // scope can't be accessed as well



// 
console.log("\n++++++++++++*********** Interesting ***************+++++++++\n");

addprintinfo(5000)
console.log(addprintinfo(5000));
function addprintinfo(data){
    return data + 1
}


// sometime below happens

add2(2500) 
// won't work as based on declaration patter as here it is hold in a variable this concept is caled hostings


const add2 = function(data){
    return data + 2
}

console.log(add2(2500));


// addprintinfo is a function as is  add2 but it is sometimes considered as an expression as well;

