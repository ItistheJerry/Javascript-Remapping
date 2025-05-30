const User = {
    // Object based
    _email: 'h@hc.com',
    _pass: 'abc123def',


    // to restrict access
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// 99% time we get class based syntax, old code we can get object or property based

// factory function
const Tea = Object.create(/*what object based reference*/ User)
console.log(Tea.email);

// we got access with email only is because, private property description, as getter and setter are special method we layer over data
// get is retrieval of data, (we covered and layerd the data on the way)
// set is same provides not as methds but as properties 
