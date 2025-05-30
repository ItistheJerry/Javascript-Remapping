/*
|        Call Me                         |
|        Global Excecution Context       |
*/


// Context being called inside a function
// to tell the function which this are we refering to 

// Then the this is referening in the above situation is Global excecution Context
// DEC issue is when window object access, thn it accesses the window Object, But when 
// it has access To Node Environment, it has access to an empty object

// Example below for the situation 


// This application has rules to set an account, checking from DB that is the username taken 
function SetUsername(username){
    // Complex Calculation
    this.username = username
    console.log("DATA IS CALLED FROM OUTSOURCE");
    
}

function createUser(username, email, password, uniqueId){
    // SetUsername(username) // only reference is given not called here
    // There are certain methods here to complete the task
    
    SetUsername.call(this, username), // Here This is referencing to this from above
    // reference need to be asked to display in EC(Excecution Context)
    // The issue is it is calling the this in itself

    this.email = email,
    this.password = password
    this.uniqueId = uniqueId
}

const user1 = new createUser("Jerry", "JerryistheOne@gmail.com", "BlubBlub@321", "#0001");

console.log(user1);
