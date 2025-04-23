# Projects related to DOM

## Project Links
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1



``` JavaScript

const clock = document.getElementById('CLOCK')
// document.querySelector('#clock')

// this method provides or asks for a method and asks for to run it continously after what set Interval it also controls Events in JS
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());

    // we have to update the document = update the node
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) // write it like this



const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: 2 + Math.random() * 3
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.strokeStyle = "rgba(0,255,225,0.1)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw triangles
  for (let p of particles) {
    ctx.fillStyle = "#00ffe1";
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x + p.size, p.y + p.size * 1.5);
    ctx.lineTo(p.x - p.size, p.y + p.size * 1.5);
    ctx.closePath();
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  }

  requestAnimationFrame(draw);
}

draw();
```
