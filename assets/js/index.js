// const canvas = document.getElementById('spiral');
// const ctx = canvas.getContext('2d');

// let angle = 180;
// let radius = 0;

// function resizeCanvas() {
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;

//     centerX = canvas.width / 2;
//     centerY = canvas.height / 2;
// }

// function drawSpiral() {
//     ctx.fillStyle = 'rgba(21, 14, 40, 0.1)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.save();

//     ctx.translate(centerX, centerY);
//     ctx.rotate(angle);

//     ctx.beginPath();
//     ctx.strokeStyle = "#ff26b9";
//     ctx.lineWidth = 30;


//     const maxRadius = Math.min(canvas.width, canvas.height) / 4;
//     const numRings = Math.floor(maxRadius / 1.5);

//     for (let i = 0; i < numRings; i++) {
//         radius = i * 2.8;
//         const x = radius * Math.cos(i * 0.3);
//         const y = radius * Math.sin(i * 0.3);
//         ctx.lineTo(x, y);
//     }

//     ctx.stroke();
//     ctx.restore();

//     angle += 0.01;

//     requestAnimationFrame(drawSpiral);
// }

// addEventListener('resize', () => {
//     resizeCanvas();
// });


// resizeCanvas();
// drawSpiral();
// addEventListener('load', () => {
//     const preloader = document.getElementById('preloader');
//     const content = document.querySelector('.content');
//     setTimeout(() => {
//         preloader.classList.add('fade-out');
//         content.style.display = 'block';
//     }, 500);
// })
// document.querySelector("#checkbox").addEventListener('click', ({ target }) => {
//     target.setAttribute('disabled', 'disabled');
//     setTimeout(function () {
//         location.href = "./home.html";
//         target.checked = false;
//     }, 3000);
// });
//my code start
// const canvas = document.getElementById('matrix');
// const ctx = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;
// const matrixChars = "DARKNUMB";
// const matrixArray = matrixChars.split("");
// let fontSize = innerWidth > 476 ? 48 : 32;
// let columns = canvas.width / fontSize;
// const drops = Array.from({ length: columns }).fill(1);
// function drawMatrix() {
//     ctx.fillStyle = "rgba(21, 14, 40, 0.1)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "#ff26b9"; 
//     ctx.font = `${fontSize}px monospace`;

//     for (let i = 0; i < drops.length; i++) {
//         const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//             drops[i] = 0;
//         }

//         drops[i]++;
//     }
// }


// setInterval(drawMatrix, 50);

// addEventListener('resize', () => {
//     clearInterval(drawMatrix);
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;
//     if (innerWidth < 478) {
//         fontSize = 20;
//     } else if (innerWidth < 768) {
//         fontSize = 32;
//     } else if (innerWidth < 1024) {
//         fontSize = 48;
//     } else {
//         fontSize = 64;
//     }
//     columns = canvas.width / fontSize;
//     drops = Array.from({ length: columns }).fill(1);

//     setInterval(drawMatrix, 50);
// });
// addEventListener('load', ()=>{
//     const preloader = document.getElementById('preloader');
//     const content = document.querySelector('.content');
//     setTimeout(() => {
//         preloader.classList.add('fade-out');
//         content.style.display = 'block';
//     }, 1000);
// })
// document.querySelector("#checkbox").addEventListener('click', ({target}) => {
//     target.setAttribute('disabled', 'disabled');
//     setTimeout(function () {
//         location.href = "./home.html";
//         target.checked = false;
//     }, 3000);
// })
//my code end

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const matrixChars = "DARKNUMB";
const matrixArray = matrixChars.split("");
let fontSize = innerWidth > 476 ? 48 : 32;
let columns = canvas.width / fontSize;
let drops = Array.from({ length: columns }).fill(1);

let boxVisible = true;
let boxX = 0;
let boxY = 0;
let box1Visible = false;
// Load tech crackling sound
const cracklingSound = new Audio('./sound/stab.mp3');

function drawMatrix() {
    ctx.fillStyle = "rgba(21, 14, 40, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff26b9";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    // Draw the blinking yellow box with a circle
    if (boxVisible) {
        ctx.strokeStyle = "yellow";
        ctx.lineWidth = 3;
        ctx.strokeRect(boxX, boxY, 0.5 * fontSize, 0.5 * fontSize);

        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(boxX + (fontSize / 4), boxY + (fontSize / 4), fontSize / 10, 0, Math.PI * 2);
        ctx.fill();
    }
    if (box1Visible) {
        ctx.strokeStyle = 'gray'
        ctx.lineWidth = 3;
        ctx.strokeRect(boxX, boxY, 0.5 * fontSize, 0.5 * fontSize);

        ctx.fillStyle = 'gray';
        ctx.beginPath();
        ctx.arc(boxX + (fontSize / 4), boxY + (fontSize / 4), fontSize / 10, 0, Math.PI * 2);
        ctx.fill();
    }
}


function toggleBoxVisibility() {
    boxVisible = !boxVisible;
    box1Visible = !box1Visible;
}

function moveBox() {
    boxX = Math.random() * (canvas.width - fontSize * 2);
    boxY = Math.random() * (canvas.height - fontSize * 2);
    box1X = Math.random() * (canvas.width - fontSize * 2);
    box1Y = Math.random() * (canvas.height - fontSize * 2);
    cracklingSound.play();
}

setInterval(drawMatrix, 50);

// Blinking effect with setInterval
setInterval(toggleBoxVisibility, 3000); // Blink every 500ms
setInterval(moveBox, 12000); // Move box every 2 seconds

// Handle resizing
addEventListener('resize', () => {
    clearInterval(drawMatrix);
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    if (innerWidth < 478) {
        fontSize = 20;
    } else if (innerWidth < 768) {
        fontSize = 32;
    } else if (innerWidth < 1024) {
        fontSize = 48;
    } else {
        fontSize = 64;
    }
    columns = canvas.width / fontSize;
    drops = Array.from({ length: columns }).fill(1);

    setInterval(drawMatrix, 50);
});

addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        content.style.display = 'block';
    }, 1000);
});

document.querySelector("#checkbox").addEventListener('click', ({ target }) => {
    target.setAttribute('disabled', 'disabled');
    setTimeout(function () {
        location.href = "./home.html";
        target.checked = false;
    }, 3000);
});
