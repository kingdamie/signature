const canvas = document.getElementById("signature-canvas");
const context = canvas.getContext("2d");
const clearButton = document.getElementById("clear-button");
const downloadButton = document.getElementById("download-button"); // Add this line

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function draw(e) {
  if (!isDrawing) return;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = "red";
  context.lineWidth = 2;
  context.lineCap = "round";
  4;
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
// Add a function to convert the canvas content to an image URL
function convertCanvasToImage() {
  const image = new Image();
  image.src = canvas.toDataURL("image/png"); // Convert canvas to PNG image
  return image;
}

// Add a click event listener to the download button
downloadButton.addEventListener("click", () => {
  if (!isDrawing) {
    const image = convertCanvasToImage();
    const a = document.createElement("a");
    a.href = image.src;
    a.download = "signature.png"; // Set the filename for download
    a.click();
  } else {
    alert("Please finish your signature before downloading.");
  }
});
