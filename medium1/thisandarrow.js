console.log("\n++++++++++++********* This +++++++*********\n");

// tells us about current context

const user = {
    username: "Jerry",
    price: 999,


    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to The future, For which all generations have been waiting for`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "Samyak";
// user.welcomeMessage();
console.log(this);

// global object in browser is called window object;
function chai(){
    let user1 = "Jerry"
    console.log(this.user1);
    
}
chai()




console.log("\n++++++++++++********* Arrow +++++++*********\n");
 


// const chaii = function () {
//     let username = "Jerry"
//     console.log(this.username);
    
// }


// Arrow Function:-

const chaii = () => {
    let username = "Jerry"
    console.log(this.username);
    
}

chaii();



// basic syntax
() => {}

// const addtwo = (num1, num2) => {
//     return num1+ num2;
// }


// implicit returns = i understood do not need to write as it is in one line;

// const addtwo = (num1, num2) => num1 + num2; return had to be written without braces;

const addtwo = (num1, num2) => (num1 + num2);

// return an object

const add = (num1, num2) => ({username: "Jerry"})


console.log(addtwo(3, 4));
console.log(add(5,6));



