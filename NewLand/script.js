console.log("Getting started with Events")

// all js events run sequencially just have some exceptions

// document.getElementById('owl').onclick = function(){
//     alert("OWL huh! wow Genius")
// }

// above is not a better suiter better use event listener

document.getElementById('owl').addEventListener('click', function(e){
    console.log(e);
    
    //
}, false) 
// event propogation has 2 context 
// event bubbling and event capturing
// most used in market is default one which is called event bubbling
// but also capturing should be known

// so now 2 example where propogation happens and we stop it how?

document.getElementById('images').addEventListener('click', function(e){
    console.log(("Clicked inside the ul"));
    
}, false)

document.getElementById('owl').addEventListener('click', function(e){
    console.log(("Clicked inside the OWL"));
    e.stopImmediatePropagation() // bubble won't happen
    
}, false)
// when clicked owl it runs both the logs si as we clicked on owl then on the ul element its like a bubble blowing owtwards
// though not right so we try captouring instead of false we use true, though based on use case

// More on the data

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault()
    e.stopImmediatePropagation()
    console.log("Google clicked");
}, false)

// PROJECT-MINI
// Li should be clicked and should be disappear

// target ul 
document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
     // when clicked near google it selects ul by parenNode of li it removies the entire ul
    // to prevent the above we use check by using the tagName as It gives IMG
    // removeIt.parentNode.removeChild(removeIt)
    
    
}, false)

// third parameter is default at false as well used for to complete some functions


// old 
// attachEvent() = 
// jQuery = onEventListener


// best to learn in events
// TYpes
// time stamp
// defaultPrevented = default behaviour is manipulatable
// target
// toElement
// srcElement = source
// currentTarget
// ClientPosition = X,Y,Z screenY, screenX, TiltX, TiltY
// altKey, ctrlKey, shiftKey, and keyCode


// Event Propogation = line 11

// learn Spilover on line 48-60
