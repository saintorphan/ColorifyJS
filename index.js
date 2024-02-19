console.log('Script Loaded...');
// Simple paint function
function paint(col) {

    const circle = document.getElementById('circleID');
    circle.style = `background-color:${col}`;

}

const colorCanvas = document.getElementById('color_canvas');
const ColorCtx = colorCanvas.getContext('2d');  // This create a 2D context for the canvas

var color = 'rgba(0,0,255,1)';
let gradientH = ColorCtx.createLinearGradient(0, 0, ColorCtx.canvas.width, 0);
gradientH.addColorStop(0, '#fff');
gradientH.addColorStop(1, color);
ColorCtx.fillStyle = gradientH;
ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);


// Create a Vertical Gradient(white to black)
let gradientV = ColorCtx.createLinearGradient(0, 0, 0, 300);
gradientV.addColorStop(0, 'rgba(0,0,0,0)');
gradientV.addColorStop(1, '#000');
ColorCtx.fillStyle = gradientV;
ColorCtx.fillRect(0, 0, ColorCtx.canvas.width,
    ColorCtx.canvas.height);


colorCanvas.addEventListener('click', function (event) {

    const bounding = colorCanvas.getBoundingClientRect();
    const x = event.clientX - bounding.left;
    const y = event.clientY - bounding.top;
    const pixel = ColorCtx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    console.log(pixel.data);
    const rgbColor = `rgb(${data[0]},${data[1]},${data[2]})`;
    const circle = document.getElementById('circleID');
    console.log(rgbColor);
    //document.body.style.background = rgb;    // Set this color to body of the document
    circle.style = `background-color:${rgbColor};)`;

});
