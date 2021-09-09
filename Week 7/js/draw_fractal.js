function processCcurve() {
  //ACCESS THE CANVAS AND RESIZE IT ACCORDING TO THE WINDOW
  var canvas = document.getElementById("canvasElement");
  var canvasContext = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerWidth * 2;

  //DRAW ON THE CANVAS
  initializeCCurve(canvas, canvasContext);
}

function initializeCCurve(canvas, canvasContext) {
  //GET THE LEVEL OF THE C CURVE
  var level = document.getElementById("nLevels").value;

  //DRAW THE C CURVE
  var y1 = canvas.height/6;
  var x1 = canvas.width - canvas.width/3;
  var y2 = canvas.height/2;
  var x2 = x1;

  drawCCurve(canvasContext, x1, y1, x2, y2, level);
}

function drawCCurve(canvasContext, x1, y1, x2, y2, level) {
  canvasContext.strokeStyle = "#00897B";
  if (level == 0) {
    canvasContext.beginPath();
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.stroke();
  }
  else {
    var xn = (x1 + x2)/2 + (y1 - y2) / 2;
    var yn = (x2 - x1)/2 + (y1 + y2) / 2;
    drawCCurve(canvasContext, x1, y1, xn, yn, level-1);
    drawCCurve(canvasContext, xn, yn, x2, y2, level-1);
  }
}
