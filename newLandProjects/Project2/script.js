// const insert = document.getElementById('insert')

// window.addEventListener('keydown', (e) => {
//     insert.innerHTML = 
//         `<div class ="key"> 
//             <h2>${e.key === ' ' ? 'Space' : e.key}</h2>
//         </div>
//     `;
// });


// Adding fireworks

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = 
        `<div class ="key"> 
            <h2>${e.key === ' ' ? 'Space' : e.key}</h2>
        </div>
    `;

    // Fireworks
    confetti({
        particleCount: 1000,
        spread: 1000,
        origin: { y: 0.5 }
    });
});



