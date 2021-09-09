var textMode = ""

//initalizes timer variables
var beginingTime;
var endindingTime;

//initalizes and declares an empty line of text to give the user
var textLine = "";

//returns whether the user has choosen the advanced or beginner mode
function textLevel(mode) {
  textMode = mode;
  return textMode;
}

//generates a random line of text depending on the mode choosen
function generateText() {
	document.getElementById("userText").value = "";
  //clears any previous results
  document.getElementById("imageResult").innerHTML = "";
  document.getElementById("testResult").innerHTML = "";

  //begins the timer for how long the user took to type the texts
  beginingTime = startTimer();
  console.log("start: " + beginingTime);
  textLine = "";

  //generates a random length for the text line
  textLength = Math.floor((Math.random() * 20) + 1);
  var i;

  //if advanced mode is choosen, choose randomly from the two arrays avaliable
  if (textMode == "advanced") {
    for (i = 0; i < textLength; i++) {
    	wordLength = Math.floor((Math.random() * 10) + 1);
			textLine += getRandomAdvancedString(wordLength) + " ";

      /*
      var randomWord = Math.floor(Math.random() * 2);
      if (randomWord == 0) {
        textLine += " " + wordsArray[(Math.floor(Math.random() * 20))];
      } else {
        textLine += " " + specialArray[(Math.floor(Math.random() * 8))];
      }*/

    }
  }

  //else just choose words from the words array
  else {
    for (i = 0; i < textLength; i++) {
    	wordLength = Math.floor((Math.random() * 10) + 1);
      textLine += getRandomBeginnerString(wordLength) + " ";
    }
  }
  console.log(textLine);
  document.getElementById("outputText").innerHTML = textLine;
  return textLine;
}

function getRandomAdvancedString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function getRandomBeginnerString(length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

//compares the text generated and the text the user inputed
function checkText() {
  //stops the timer
  endindingTime = endTime();

  //takes out any blank spaces from the end and start of the generated text
  //opText = textLine.trim();
  //console.log("Optext: " + opText);
  textLine = textLine.trim();

  //gets the user inputed text and takes off any blank space at start and front
  var typedAnswer = (document.getElementById("userText").value);
  //console.log("user input: " + userInput);

  //checks if text are the same and tells user if they are
  if (textLine == typedAnswer) {
    document.getElementById("imageResult").innerHTML = "<img src='a7/media/success.jpg'>";
    document.getElementById("testResult").innerHTML = "Good job!! You typed the text correctly." +
      "<br> It took you " + timeDiff(beginingTime, endindingTime);
  } else {
    document.getElementById("imageResult").innerHTML = "<img src='a7/media/failure.jpg'>";
    document.getElementById("testResult").innerHTML = "Sorry, you entered the wrong text." +
      "<br>You typed - <br>" + typedAnswer +
      "<br><br>You should have typed - <br>" + textLine;
  }
}

function startTimer() {
  return Date.now();
}

function endTime() {
  return Date.now();
}


//calculate total time
function timeDiff(s, e) {
  var timeString = "";
  var seconds = Math.floor((e - s)/1000);
	timeString = seconds + " seconds";
  return timeString;
}
