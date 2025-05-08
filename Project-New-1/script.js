// Most basic function is setTimout:-

// = browser based function as well and also has a part clear interval and clear timeout
// handler timout handler is a function who doesn't have a name yet

// const truth = function(){
//     console.log("Jerry is Samyak!");
    
// }
// const texter = function (){
//     document.querySelector('h1').innerHTML = "Jerry is the Best Engineer There is" 
// }

// setTimeout(truth, 5000); 

// const clearMe = setTimeout(texter, 10000);


// it will work anyway do not need any callback

// setInterval =  we demand interval a little breakpoint but in setTimeout is like do it once after a timeperiod

// example when we have been to a website for more than 2 - 5 minutes it shows a pop up or notification or message for a sale or scheme
// to stop the setTimeout in certain situation = below we use clearTimeout for it


// for clearTimeout to work it needs reference for it to work

// clearTimeout(clearMe, 11000) will insert on a button

// document.querySelector('#stop')
// addEventListener('click', function(){
//     clearTimeout(clearMe)
//     console.log("STOPED");
    
// });

// Now having fun with setInterval
let dateIsOn 


document.querySelector('#start')
addEventListener('click', function(){
    dateIsOn = function(){
        console.log("BLub BLub", Date.now());
    
    }
    

// will add Date.now otherwise it will continously print it 
    
})
const thatswhatshesaid = setInterval(dateIsOn,1000)
// this hi will be acting as a third parameter

// to stop this
document.querySelector('#stop')
addEventListener('click', function(){
   clearInterval(thatswhatshesaid)
   console.log("STOPPED");
   
})
