//Controller.js
//THIS IS THE MAIN JAVASCRIPT TO LAUNCH
//--------------------------

//TASK 1: DECLARE AN OBJECT
var counter;

window.onload = function() {
  //TASK 2: SET THE INITIAL COUNT TO ZERO
  $("ncount").value = "0";

  //TASK 3: CONSTRUCT THE DATA OBJECT (MODEL) FOR COUNTING
  counter = new Counter();
}

var processCount = function() {
  //TASK 1: INCREMENT THE COUNTER
  counter.addCount();

  //TASK 2: UPDATE THE HTML VIEW
  $("ncount").value = counter.getCount();
}

var $ = function (id) {
  return document.getElementById(id);
}
