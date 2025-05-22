function multiply5(num){
    return num*5
}

console.log(multiply5(72));

multiply5.power = 2

// functions are objects as well
console.log(multiply5.power);
console.log(multiply5.prototype); // by default objects or properties as each function posses

// Function / Array / String is an object whose value is null

function createUser(username, score){
    this.username = username
    this.score = score
}
let UserOne = new createUser("Shailina", 32)

console.log(UserOne.username);

console.log(UserOne.score);

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price: ${this.score}`);
    console.log(`Product: ${this.username}`);
    
    
}

const chai = new createUser("tea", 25)
const tea = new createUser("chai", 52)

// problem here is we dont know which user's score has to be incremented
// to solve it we use this keyword which says that whoever calls will get an increment

// in Array we don't need to type a path to reach a method available in prototype

chai.printMe()
tea.printMe()



// PROTOTYPE EXAMPLE

let myName = "Jerry"

console.log(myName.trueLength);

// Specific usecase as this is what is used in making library and frameworks
// the truelength property says completely tells the length and the original length of the data



let myHeroes = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Lighting/Thunder",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`One of Spiderman's power is: ${this.Spiderman}`);
        
    }
}

Object.prototype.Jerry = function(){
    console.log(`Jerry is present in all Objects`);
    
}

Array.prototype.heyJerry = function(){
    console.log(`Jerry says Hello`);
    
}

// heroPower.Jerry()

myHeroes.Jerry()
myHeroes.heyJerry()


// INHERITENCE

// every object is containing there own instance in Themselves

const User = {
    name: "Samyak",
    email: "BlubBlub0011@CrownMail.com"
}

const Teacher = {
    makeVide: true
}

const teachingAssist = {
    isAvailable: false,
    __proto__: Teacher
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingAssist
}

Teacher.__proto__ = User

// Using to access data but is OLD way to do so 
// NEW one is below


// MORDERN SYNTAX = direct access to the Object
// Sets the Prototype of a specified Object O to object proto or null Returns the Object O.

Object.setPrototypeOf(teachingAssist, Teacher)
// access to , access from (Parameter Above)



let anotherUsername = "\nJerry Or Samyak      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()
"\nJerry".trueLength()
"\niceTea".trueLength()
