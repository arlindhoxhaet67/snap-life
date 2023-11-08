/*
   Filename: ComplexJavaScriptCode.js
   Description: This code demonstrates the implementation of a complex and elaborate algorithm for generating a customizable fractal pattern known as a Mandelbrot Set using JavaScript.
*/

// Define the canvas size for visualization
const canvasWidth = 600;
const canvasHeight = 600;

// Define the range of the coordinate system
const minX = -2;
const maxX = 1;
const minY = -1.5;
const maxY = 1.5;

// Define the maximum number of iterations to determine set membership
const maxIterations = 500;

// Initialize the canvas element
const canvas = document.createElement('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.body.appendChild(canvas);

// Get the 2D context for drawing on the canvas
const ctx = canvas.getContext('2d');

// Function to map a value from one range to another
function mapRange(value, inMin, inMax, outMin, outMax) {
   return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Function to determine set membership and return the number of iterations
function iterateMandelbrotSet(x, y) {
   let real = 0;
   let imaginary = 0;
   let iteration = 0;

   while (iteration < maxIterations) {
      const realTemp = real * real - imaginary * imaginary + x;
      const imaginaryTemp = 2 * real * imaginary + y;

      real = realTemp;
      imaginary = imaginaryTemp;

      if (real * real + imaginary * imaginary > 4) {
         break;
      }

      iteration++;
   }

   return iteration;
}

// Function to draw the Mandelbrot Set
function drawMandelbrotSet() {
   for (let pixelX = 0; pixelX < canvasWidth; pixelX++) {
      for (let pixelY = 0; pixelY < canvasHeight; pixelY++) {
         const x = mapRange(pixelX, 0, canvasWidth, minX, maxX);
         const y = mapRange(pixelY, 0, canvasHeight, minY, maxY);

         const iterations = iterateMandelbrotSet(x, y);
         const brightness = mapRange(iterations, 0, maxIterations, 0, 255);

         ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
         ctx.fillRect(pixelX, pixelY, 1, 1);
      }
   }
}

// Call the drawMandelbrotSet function to generate and draw the fractal
drawMandelbrotSet();