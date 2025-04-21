// select buttons and then select the whole body

// select via class or id so we collectively select via class and use loop

const change = document.querySelectorAll('.button')

const shareer = document.querySelector("body")


// either loops or events 

// Events

//forEach as nodeList
change.forEach(function(button){
    console.log(button);
    // event Listner in each button
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            shareer.style.backgroundColor = e.target.id;
            shareer.style.color = "yellowGreen"
        }
        else if(e.target.id === 'white'){
            shareer.style.backgroundColor = e.target.id;
            shareer.style.color = "yellowGreen"
        }
        else if(e.target.id === 'blue'){
            shareer.style.backgroundColor = e.target.id;
            shareer.style.color = "yellowGreen"
        }
        else if(e.target.id === 'yellow'){
            shareer.style.backgroundColor = e.target.id;
            shareer.style.color = "yellowGreen"
        }
        else if(e.target.id === 'black'){
            shareer.style.backgroundColor = e.target.id;
            shareer.style.color = "yellowGreen"
        }
        
        
        
    })
})
