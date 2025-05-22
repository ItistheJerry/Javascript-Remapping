// OBJECT LITERAL

const user = {
    username: "Jerry",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(("Got user Details from Database"));
        console.log(`Username: ${this.username}`);
        console.log(`LoginCount: ${this.loginCount}`);
        console.log(`signed: ${this.signedIn}`);
        console.log(this);
        
        
    }
}

console.log((user.username));
console.log(user.getUserDetails()) ;

// the issue to resolve is to mention about which context or function or data are we talking to in the code thus we use below;

// this keyword is used for the above


// CONSTRUCTOR FUNCTION


// const promiseOne = new Promise()
// const date = new Date()

// The New keyword Here is Constructive this new allows us to develop multiple instances from a single object literal 



function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // method
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Jerry", 12, true)
const userTwo = new User("Samyak", 11, false)
console.log(userOne.constructor);
console.log(userOne);

console.log(userTwo);


// NEW

// when we use it it create an empty object named instance, like this keyword
// new object is created
// the constructor function is called cause of new keyword and packs all the arguments and then provides us with this keyword is injected with the arguments 
// and we are served with functions
// constructor property is a reference about ourselves



// instance of operator method
// to check if we are accessing the same instances


// Here above encapsulations (userOne's data is encapsulate) and abstraction (constructor, greeting)
