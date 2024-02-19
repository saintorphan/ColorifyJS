console.log('Script Loaded...');
// Simple paint function
function paint(col) {
    
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${col}`;
    
}

var colorCanvas = document.getElementById('color_canvas');
var ColorCtx = colorCanvas .getContext('2d');  // This create a 2D context for the canvas

var color = 'rgba(0,0,255,1)';
let gradientH = ColorCtx .createLinearGradient(0, 0, ColorCtx .canvas.width, 0);
gradientH.addColorStop(0, '#fff');
gradientH.addColorStop(1, color);
ColorCtx .fillStyle = gradientH;
ColorCtx .fillRect(0, 0, ColorCtx .canvas.width, ColorCtx .canvas.height);


// Create a Vertical Gradient(white to black)
 let gradientV = ColorCtx .createLinearGradient(0, 0, 0, 300);
 gradientV.addColorStop(0, 'rgba(0,0,0,0)');
 gradientV.addColorStop(1, '#000');
 ColorCtx .fillStyle = gradientV;
 ColorCtx .fillRect(0, 0, ColorCtx .canvas.width, 
 ColorCtx .canvas.height); 
 colorCanvas.addEventListener('click',function(event){
    let x = event.clientX;  // Get X coordinate
    let y = event.clientY;  // Get Y coordinate
    const pixel = ColorCtx.getImageData(x,y,1,1)['data'];   // Read pixel Color
   console.log(pixel);
    const rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    console.log(rgb);
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${rgb})`;
   
 });
