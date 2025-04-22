# Projects related to DOM

## Project Links
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1

```JavaScript
const form = document.querySelector('form')


// this usecase will give us empty values if used 
// const weight = parseInt(documemnt.querySelector('#weight').value) here

// form is submittes by either get or post
form.addEventListener('submit', function(e){
    e.preventDefault() // prevents default function or process

    // need values height and weight

    const weight = parseInt(document.querySelector('#weight').value) // value is recieved in strings
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#result')

    // diff here is taking values on the happening of the event 

    // calculation checking prerequisites

    // clearing previous result
    result.innerHTML = '';

    if(weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid Weight";
        return;
    }
    else if(height <= 0 || isNaN(height)){
        result.innerHTML = "Please give a valid Height";
        return;
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2) // only provides to max 2 decimal numbers
        // result presentation
        result.innerHTML = `<span>${bmi}</span>`;
    }
})
```
