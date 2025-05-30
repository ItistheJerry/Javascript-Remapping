// OLD SYNTAX

function User(email, password){
    this._email = email,
    this._password = password

    // Getter and setter assign old ways = object allows us as function being an object as well so we call its objects properties, 
    // this is referesnce context and property overwriting
    Object.defineProperty(this, 'email',  { // object and define property
    
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        } 
    })


    Object.defineProperty(this, 'password',  { // object and define property
    
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        } 
    })
}


const bhai = new User("bhai@bhai.com", "bhai1234#joh#42452")

console.log(bhai.email);


// object based syntax and infuse them with getters and setters

