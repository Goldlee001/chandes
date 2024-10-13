const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Adjust canvas size dynamically

// The draw function
canvas.width = innerWidth;
canvas.height = innerHeight;

// Characters for the matrix animation
const matrixChars = "DARKNUMB";
const matrixArray = matrixChars.split("");

// Setting up the font size and columns
let fontSize = innerWidth > 476 ? 48 : 32;
let columns = canvas.width / fontSize;

// Array to store the position of columns
const drops = Array.from({ length: columns }).fill(1);
function drawMatrix() {
    // Transparent background to create the fading effect
    ctx.fillStyle = "rgba(21, 14, 40, 0.1)"; // Background with transparency
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the matrix text color and font
    ctx.fillStyle = "#ff26b9"; // Updated text color
    ctx.font = `${fontSize}px monospace`;

    // Loop over the columns and draw the characters
    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset the drop if it goes off-screen and randomly start over
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}


setInterval(drawMatrix, 50);

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
addEventListener('load', ()=>{
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        content.style.display = 'block';
    }, 1000);
})
document.querySelector("#checkbox").addEventListener('click', ({target}) => {
    target.setAttribute('disabled', 'disabled');
    setTimeout(function () {
        location.href = "./home.html";
        target.checked = false;
    }, 3000);
})

