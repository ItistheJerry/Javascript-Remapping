console.log("\n+++++++++++++*********** Objects1 ++++++++++++++++********\n");
// singleton
// when we make with constructor only singleton;
// when declare like literals;
// object literals = to declare objects;

// Object.create;  // object made via constructor difference makes singleton


// declare symbol 
const mySym = Symbol("key1");
// either declare a symbol or use it as a key;



const user1 = { // key: values,
    name: "Jerry",
    age: 21,
    [mySym]: "mykey1",
    profession: "Inventor",
    location: "Jaipur",
    email: "Blip@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}; // object made via object literals

// Accessing the object
console.log(user1.email);
console.log(user1["email"]);
console.log(user1[mySym]); //

// access object values by . notation

// but to change the value below
user1.email = "Jerry@blip.com";
// to be setting the data in the object un mutable we use
// Object.freeze(user1);

console.log(user1);


// function = no discrimination treat as variable;
user1.greeting = function(){
    console.log("Hello JS user");
}

// refereing method here
console.log(user1.greeting());

user1.greeting2 = function(){ // here we will refer the name in the object
    console.log(`Hello JS user ${this.name}`);
}

console.log(user1.greeting2());  // undefined one will be solved later;




console.log("\n+++++++++++++*********** Objects2 ++++++++++++++++********\n");
// object literals above
// singleton + constructor

// const tinderUser1 = new Object(); // option to make an object is a singleton object
const tinderUser1 = {} 
// without singleton object;


tinderUser1.id = "12343";
tinderUser1.name = "Sam";
tinderUser1.email = "sam@gmail.com";
tinderUser1.isLoggedIn = false;


console.log(tinderUser1);




const tinderUser2 = {
    email: "some@gmail.com",
    fullname: { // object in itself
        userFullname: {
            firstname: "Jerry",
            lastname: "Jain"
        }    
    }
}
console.log(tinderUser2.fullname);
console.log(tinderUser2.fullname.userFullname);
console.log(tinderUser2.fullname.userFullname.firstname);
console.log(tinderUser2.fullname.userFullname.lastname);


// option naming

console.log(tinderUser2.fullname?.userFullname.firstname); // if this value exist here then do this used in node api's


// combining object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3); // not usefull

const obj4 = Object.assign(obj1, obj2);
console.log(obj4);



const obj5 = Object.assign({}, obj1, obj2); // optional parameter it is a good use as
// all value will be combined;
console.log(obj5);


console.log("\n+++++++++++++*********** Objects3 ++++++++++++++++********\n");
