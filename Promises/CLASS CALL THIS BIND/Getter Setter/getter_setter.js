class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }


    // getter and setters = used for access control and more, error if we dont want to give access to password,
    get password(){ // setter has to be made as well
        return this._password.toUpperCase()
    }
    // which ever properties we use getter and setter automatically make methods 

    // getter function is to get the class value and to set setter

    set password(value){
        this._password = value.toUpperCase()
    }
}

// problem here arised was that constructor and setter both are trying to set the value,

const jerry = new User("BilJerry@gmail.com", "122a4$b%#@#$c23d4")

console.log(jerry.password);

console.log(jerry.email);



