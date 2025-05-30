// ES6

class User1 {
    // property and functions can be added
    // constructor gains life when we initialise an object from class 
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPass(){ // . is not a function is a method as it is in a class
        return `${this.password}abc#123432`
    }
    // capitalise the username
    userNameCap(){
        return `${this.username.toUpperCase()}`
    }
}


const bhai = new User1("Jerry", "Bhai@0011@gmail.com", "21344324#4342")

console.log(bhai.encryptPass());
console.log(bhai.userNameCap());




// BTS = is class was not given, how would we do it then

function User2(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
}

User2.prototype.encryptPass = function(){
    return `${this.password}abc#123432`
}

User2.prototype.userNameCap = function(){
    return `${this.username.toUpperCase()}`
}

const Log = new User2("Barry", "fastestOAllen001@StarLabs.com", "FastestManAlive@is<-")

console.log(Log.encryptPass());
console.log(Log.userNameCap());




// INHERITENCE

class User3 {
    constructor(username){
        this.username = username
    }

    logMe(){ // gives value of the username
        console.log(`USERNAME: ${this.username}`);
        
    }
}

// In a Fortunate case While Building LMS OR CRM or ECommerce we, Might need to make him Admin or Teacher so below

class Teacher extends User3{
    // Now we need To override seperate constructor of teacher
    constructor(username, email, password, teacherMode){
        super(username) // this keyword asks for the extended class and fetch for the data and will push this as well and you will have access
        this.email = email,
        this.password = password,
        this.teacherMode = teacherMode 
        // instead of call, this or bind now we use class syntax below
    }

    addCourse(){
        console.log(`A NEW COURSE WAS ADDED BY ${this.username}`);
    }
}


const USERone = new Teacher("JERRY", "Teacher@Jerry.com", "Passwordis@This<-", "true")

USERone.addCourse();

const Bilbo = new User3("Baggins")

// does this above user has access to addCourse
Bilbo.logMe()

console.log(USERone === Bilbo); // false

console.log(USERone === Teacher); // False as it is an instance of it so to check if it is build using its instance we check

console.log(USERone instanceof Teacher);

console.log(USERone instanceof User3);






// STATIC PROPERTIES

class User4 {
    constructor (username){
        this.username = username
    }

    // methods

    logMe(){
        console.log(`USERNAME: ${this.username}`);
        
    }

    // . out requirement is as a potential user save their information we want to assign an unique Id for better storage and retrieval

    static createId(){ // assuming unique
        return `123`
    }
}
const Jerry = new User4 ("Jerry")

console.log(Jerry);
// console.log(Jerry.createId()) // so sometime we do not prefer the access to be provided to object which are instanciated from this class to we use static



class Teacher2 extends User4 {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher2("Iphone 16", "i@Phone.com");
console.log(iPhone.logMe());


// no body is getting access of these class's createId