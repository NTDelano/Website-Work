function Conversion() {
  var mea = document.getElementById("label").innerHTML;
  var units = document.getElementById("measurement").value;
  var solution;
  //alert(document.getElementById("label").innerHTML);

  if (document.getElementById("label").innerHTML == "Centimeters") {
  	solution = units/2.54;
    document.getElementById("answer").innerHTML = units + " cm(s) converts to " + solution + " inch(es)";
  }
  else if (document.getElementById("label").innerHTML == "Inches") {
  	solution = units*2.54;
    document.getElementById("answer").innerHTML = units + " inch(es) converts to " + solution + " cm(s)";
  }


}

function cm_to_in() {
  var v_cm = document.getElementById("t_cm").value;
  var v_in = v_cm * 0.39370079;
  document.getElementById("t_in").value = v_in;
}

function setUnits(m) {
	document.getElementById("label").innerHTML = m;
}
