//compute_mpg.js
//---------------------

//TASK 1: SETS ID FOR FUNCTIONS = CONVEIENCE
var $ = function(id) {
  return document.getElementById(id);
}

var calculateMPG = function(m, g) {
  var mpg = m / g;
  mpg = mpg.toFixed(1);
  return mpg;
}

var processEntries = function() {
  //TASK 1: COLLECT THE INPUT
  var miles = parseFloat( $("milesdriven").value);
  var gallons = parseInt( $("ngallons").value);

  //TASK 2: VALIDATE THE INPUT
  if (isNaN (miles) || isNaN (gallons)) {
    alert ("One or more entries is not a number.")
  }
  else if (miles <= 0 || gallons <= 0) {
    alert ("One or more entries is invalid.")
  }
  else {

    //TASK 3: COMPUTE THE MILES PER GALLON
    $("milespergallon").value = calculateMPG(miles, gallons);
  }
}

window.onload = function() {
  $("calculate").onclick = processEntries;
  $("milesdriven").focus();
}
