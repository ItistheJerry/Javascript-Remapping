// generate a random colour

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;

};

let intervalId;

// random value
console.log(randomColor());

const startColorChange = function(){

    // checking the credentials
    if(!intervalId){ // if interval id does not exist
        intervalId = setInterval(changeBg, 1000);
    }

    function changeBg(){
        document.body.style.backgroundColor = randomColor()
    }
    // to have them turn contionously we use setInterval method
}
const stopColorChange = function(){
    clearInterval(intervalId);
    // overwrite values = by flushing it
    intervalId = null;
}

// now enabeling the color change through start button
document.querySelector("#start").addEventListener('click', startColorChange)

// now stopping the color change through stop button
document.querySelector("#stop").addEventListener('click', stopColorChange)
