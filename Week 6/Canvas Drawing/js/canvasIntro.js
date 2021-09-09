function draw() {
  var canvas = document.getElementById("canvasElement");
  var canvasContext = canvas.getContext("2d");

  drawLine(canvasContext, 50, 50, 200, 80);
  drawCircle1(canvasContext, 125, 125, 50);
  drawCircle2(canvasContext, 200, 200, 20);
  drawTriangle(canvasContext, 200, 150, 50);
}

function drawLine(canvasContext, lineStartX, lineStartY, lineEndX, lineEndY) {
  canvasContext.beginPath();
  canvasContext.moveTo(lineStartX, lineStartY);
  canvasContext.lineTo(lineEndX, lineEndY);
  canvasContext.stroke();
}

function drawCircle1(canvasContext, centerX, centerY, radius) {
  var startAngleInRadians = 0;
  var endAngleInRadians = 2 * Math.PI;

  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, startAngleInRadians, endAngleInRadians);
  canvasContext.stroke();
}

function drawCircle2(canvasContext, x, y, r) {
  canvasContext.fillStyle = "black";
  var start = 0;
  var stop = 2 * Math.PI;

  canvasContext.beginPath();
  canvasContext.arc(x, y, r, start, stop);
  canvasContext.stroke();
  canvasContext.fill();
  canvasContext.closePath();
}

function drawTriangle(canvasContext, startX, startY, length) {
  canvasContext.fillStyle = "yellow";

  canvasContext.beginPath();
  canvasContext.moveTo(startX, startY);
  canvasContext.lineTo(startX + length, startY);
  canvasContext.lineTo(startX + (length / 2), startY + (length / 2));
  canvasContext.lineTo(startX, startY);
  canvasContext.stroke();
  canvasContext.fill();
  canvasContext.closePath();
}
