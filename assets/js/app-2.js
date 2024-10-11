const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Adjust canvas size dynamically
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the matrix animation
const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const matrixArray = matrixChars.split("");

// Setting up the font size and columns
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array to store the position of columns
const drops = Array.from({ length: columns }).fill(1);

// The draw function
function drawMatrix() {
    // Transparent background to create the fading effect
    ctx.fillStyle = "rgba(21, 14, 40, 0.05)"; // Background with transparency
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

// Redraw the canvas every 30 milliseconds
setInterval(drawMatrix, 30);
