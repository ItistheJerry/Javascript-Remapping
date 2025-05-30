// CLOSURE
/*
Is a combination of function bundled together with references to its surrounding state 
(A Closure gives us access to an outer function's scope from an inner function)

([{Closure is or are created every time a function is created, at function creation time.}])

// LEXICAL SCOPING
*/

function init(){
    let name = "Mozilla"; // Name is a local variable created by init

    function displayName(){
        // displayName() is the inner function, that forms the closure

        console.log(name); // using the variable declared in the parent function

    }

    displayName();
}

init();


function outer(){
    let username = "Barry"
    
    function inner(){
        let secret = "why231"
        console.log("inner", username);
        
    }
    function innerTwo(){
        console.log("innerTwo", username); 
    }
    inner()
    innerTwo()
}
outer()


// CLOSURE = MEMNORY REFERENCE

function makeFunc(){
    const name = "Mozilla";
    function displaName(){
        console.log(name);
        
    }

    return displaName;
}

const myfunc = makeFunc(); // removes the above function scope
myfunc();
// here calling displayName will not only runs the function displayName it will take the outer scopr functioj if exists with itself
// now using lexical scope and closure, now we can print name as being in outer function by calling in inner function




// EXAMPLE

