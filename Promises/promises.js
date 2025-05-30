// fetch('https://youtube.com').then().catch().finally() // this is fetch not promises

// fetch data from here is any response then then() will recieve or if any error catch() will recieve

// It is an object representing eventual completion or failure.

// PROMISES and all promises variables and variants will be below

// Create
const promiseOne = new Promise(function(resolve, reject){
    // Do Async tasks
    // DB calls
    // CRYPTOGRAPHY TASKS
    // NEtwork call
    setTimeout(function(){
        console.log('ASYNC Task is now Completed!!');
        resolve()
        
    }, 1000)
}); 

// takes callback and reduces and solves callback Hell
// Consumption

promiseOne.then(function(){
    console.log("Promise Consumed");
    
}) // connects to resolve // takes callback(function) it automatically return the value as in logic 
// above one has completed the async task but the .then is not connected to resolve to do so we do what we do in line17
// History

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve()
        
    }, 2000)
}).then(function(){
    console.log("Task is Completed!");
    
})


const promiseThree = new Promise(function(resolve, reject){
    // network data is passed 
    setTimeout(function(){
        // data retrieved from database, thus resolve is what transfers to .then and resolve also can pass data as parameter
        resolve({username: "Jerry", email: "Meu@us.com"})
    }, 3000)
})


promiseThree.then(function(user){
    // to get the data
    console.log(`The User data is Below:- \n`,user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // reject on error
        if(!error){
            resolve({username: "JERRY", password: "2334@dr42"})
        }
        else{
            reject('ERROR: The DataBase is under DDOS, To Resolve the issue, Reconnect All the Cables and Connections')
        }
    },4000)

})

// 
promiseFour.then((user) => { // callback hell and then and catch can be used multiple times
    // extracting username:
    console.log(user);
    return user.username
}).then((username) => { // taking data from above the process called chaining best and most used in database connection
    console.log(username);
}).catch(function(error){
    console.log(error);
})
.finally(() => console.log("THE PROMISE EITHER RESOLVED OR REJECTED THE MSG IS ACCORDING TO THAT"))


// prefer then and catch from next line in case of chaining 

// finally = is used as in whatever the case might be just notify that have the task completed



const promiseFive = new Promise(function(resolve, reject){
    //
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({language: "Javascript", password: "123@321"})
        }
        else{
            reject('ERROR: Syntax ERROR in JavaScript')
        }
    }, 5000)
})

// really working issue resolve with asyncAwait mostly used
// what it does is it is like then and catch waits for a while if condition meets then only proceeds, or else does show error
// but usually catch isn't catch is not gracefully handled 


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive()

// there will be error without try catch 

// making an asyncawait methods


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const ourData = await response.json()
//         console.log(ourData);
//     } catch (error) {
//         console.log("E:", error);
        
//     }
    
// }

// getAllUsers()

// al of them in .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}) // bellow then for handeling
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})



fetch('https://api.github.com/users/ItistheJerry')
.then((response) => {
    return response.json()
}) // bellow then for handeling
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})
