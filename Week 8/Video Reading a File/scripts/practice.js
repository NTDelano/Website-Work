//TASK 1: DECLARE GLOBAL VARIABLES
var fileSelector = null;
var textData = "hello";

//TASK 2: INITIALIZE FILESELECTOR AND FILEREADER AT TIME OF LOAD
function initialize() {
  fileSelector = document.getElementById("file-selector");
  fileSelector.addEventListener('change', function() {
    var fileReader = new FileReader();
    fileReader.onload = function() {
      textData = fileReader.result;
    }
    fileReader.readAsText(this.files[0]);
  });
}

//HANDLER FOR BUTTON CLICK
function compute() {
  //TASK 1: REMOVE WHITESPACE
  textData.trim();

  //TASK 2: SPLIT WORDS INTO ARRAY CELLS
  wordArray = textData.split(' ');

  //TASK 3: CREATE VARIABLE TO STORE OUTPUT RESULTS
  var output = "<ol>";

  //TASK 4: LOOP THROUGH THE ARRAY OF WORDS AND PRODUCE
  //        AN HTML LIST OF WORDS THAT BEGIN WITH THE LETTER V.
  for (var i = 0; i < wordArray.length; i++) {
    var letter = wordArray[i].charAt(0);
    if (letter == 'V' || letter == 'v') {
      output += '<li>' + wordArray[i] + '</li>';
    }
  }
  output += '</ol>';

  //TASK 5: DISPLAY THE HTML LIST OF WORDS
  document.getElementById("myDisplay").innerHTML = output;
}
