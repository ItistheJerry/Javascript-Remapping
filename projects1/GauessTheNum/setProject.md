# Projects related to DOM

## Project Links
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1


``` Javascript

let randyNum = (parseInt(Math.random() * 100 + 1));
console.log(randyNum);

// button
const submit = document.querySelector('#guess-btn');
// userInput
const userGuess = document.querySelector('.guess-input');
// Guesses made yet
const guessSlot = document.querySelector('.guesses');
// Remaining Guesses
const remain = document.querySelector('.lastResult');
// LowORhigh values
const lowORHi = document.querySelector('.lowOrHi')
// for restarting after all chances used
const restart = document.querySelector('.resultParas');
// the paragraphs
const p = document.createElement('p')



// storing user inputs in guesses and storing it in an array and showing it to the user back again
let prevGuess = [];
// calculating attempting guesses
// till 10 then disable the submit 
let numGuesses = 1;

// new variable to allow playing
let playGame = true;

// check if the player id available or not 
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault() // stop moving data
        const guessInput = parseInt(userGuess.value)
        console.log(guessInput)
        validateGuess(guessInput)
    })
}


// Functions 

function validateGuess(guess){ // validation is used in most time in backend
    // is the number valid
    // is the number not negative
    // only btw 1-100
    if (isNaN(guess)){
        alert('PLEASE ENTER A NUMBER!')
    } else if (guess < 1){
        alert('PLEASE ENTER A NUMBER!')
    } else if (guess > 100){
        alert('PLEASE ENTER A NUMBER BETWEEN 1 AND 100')
    } else {
        // number should add to array
        prevGuess.push(guess)
        // what if its last attempt
        if (numGuesses === 11){
            displayGuess(guess)
            displayMsg(`Game over! 😭, The Correct Guess Was: ${randyNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // print msg that the above function is true on all accords
    // tells is the correct guess lower or higher or equal
    if(guess === randyNum){
        displayMsg(`YOU HAVE WON YOU BIIIITHC!`);
        endGame()
    } else if (guess < randyNum){
        displayMsg(`Number is TOOOOO LOW`);
    } else if (guess > randyNum){
        displayMsg(`Number is TOOOOO High`);
    }
}

function displayGuess(guess){
    // values will be cleaned previous guess will be updated
    // and also update guesses remaining
    userGuess.value = ''
    guessSlot.innerHTML += `${guess} :: `
    numGuesses++;
    remain.innerHTML = `${11 - numGuesses}`
}

function displayMsg(message){
    // interacts with Dom
    // input value of the user will be remove for the next one
    // innerHTML will be added to the guess
    // numbers will be reduced at the guesses Remaining
    lowORHi.innerHTML = `<h2>${message}</h2>`
}


// END and Start new Game

function endGame(){
    // clear all input feild
    userGuess.value = ''
    userGuess.setAttribute('disabled', true)
    // start button
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">RESTART!</h2>`
    // append
    restart.appendChild(p)
    playGame = false
    newGame()

}

function newGame(){
    // 
    const newBaba = document.querySelector('#newGame')
    newBaba.addEventListener('click', function(e){
        randyNum = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        remain.innerHTML = `${11 - numGuesses}`
        userGuess.removeAttribute('disabled')
        restart.removeChild(p)
        
        playGame = true
    })
}
```
