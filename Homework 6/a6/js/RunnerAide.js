function calculatePace() {

  var pacecheck = document.getElementById("targetPace").value;
  var rp = validateMinuteSecond(pacecheck);

  if (rp == false) {
    alert("Target pace must be of the form (mm:ss)");
    return;
  } else {

    var distance = document.getElementById("distanceTotal").value;
    var pace = document.getElementById("targetPace").value;

    var distanceIteration = [];
    var times = [pace];

    for (var i = 1; i <= distance; i++) {
      distanceIteration.push(i);
    }
    if ((distance - Math.floor(distance)) != 0) {
      distanceIteration.push(distance);
    }

    for (var i = 1; i < distanceIteration.length; i++) {
      var NewTime = addTimes(times[i - 1], pace, distanceIteration[i], distanceIteration[i - 1]);
      times.push(NewTime);
    }


    //MAKE THE TABLE
    var tableString = "<table>";
    tableString += "<thead><tr>";
    tableString += "<th>Distance  |</th>";
    tableString += "<th>Time</th>";
    tableString += "</tr></thead>";

    //TASK 2: ADD ROWS FOR EACH TERM IN THE MULTIPLICATION
    for (var r = 0; r < distanceIteration.length; r++) {
      //1. FIND THE TABLE ELEMENT AND ADD A NEW ROW
      tableString += "<tr>"

      //2. CONSTRUCT EACH OF THE ROW DATA COLUMNS
      tableString += "<td>" + distanceIteration[r] + "</td>";
      tableString += "<td>" + times[r] + "</td>";

      tableString += "</tr>";
    }
    tableString += "</table>";

    //DISPLAY THE TABLE
    document.getElementById("paceList").innerHTML = tableString;

  }
}
//Check if the pace is of the format mm:ss
function validateMinuteSecond(inputField) {
  var isValid = false;
  if (inputField.match(/^([0-5][0-9]:[0-5][0-9])$/)) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}

function addTimes(startTime, addedTime, after, before) {
  var times = [0, 0, 0]; //[hours,minutes,seconds]
  var max = times.length;

  var a = (startTime || '').split(':').map(Number);
  var b = (addedTime || '').split(':').map(Number);

  var ratio = after - before; //Usually 1, but if distance is a decimal, it will
  //adjust the pace accordingly

  //If my time arrays have a length less than 3, then adds a 0 at the begging
  //of array, as it means there is no hours value
  if (a.length < max) {
    a.unshift(0);
  }
  if (b.length < max) {
    b.unshift(0);
  }

  //Changes the values added on if the ratio is less than 1
  if (ratio < 1) {
    var totalSeconds = b[2] + (b[1] * 60) + (b[0] * 60 * 60);
    totalSeconds *= ratio;

    var h = totalSeconds / (60 * 60);
    var hratio = Math.floor(h);
    var rm = (h - hratio) * 60 * 60;

    var m = rm / 60;
    var mratio = Math.floor(m);

    var sratio = (m - mratio) * 60;

    b[0] = Math.round(hratio);
    b[1] = Math.round(mratio);
    b[2] = Math.round(sratio);
  }

  //add the current time by the time being added
  for (var i = 0; i < max; i++) {
    times[i] = a[i] + b[i];
  }

  var hours = times[0];
  var minutes = times[1];
  var seconds = times[2];

  //Converts the matrix to the form hh:mm:ss
  if (seconds >= 60) {
    var min = Math.floor(seconds / 60);
    minutes += min;
    seconds = Math.round(((seconds / 60) - min) * 60);
  }

  if (minutes >= 60) {
    var hr = Math.floor(minutes / 60);
    hours += hr;
    minutes = Math.round(((minutes / 60) - hr) * 60);
  }

  //If hours is 0, then it just won't include it
  if (hours == 0) {
    return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
  } else {
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
  }
}

function buildTable(labels, objects, container) {
  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  var theadTr = document.createElement('tr');
  for (var i = 0; i < labels.length; i++) {
    var theadTh = document.createElement('th');
    theadTh.innerHTML = labels[i];
    theadTr.appendChild(theadTh);
  }
  thead.appendChild(theadTr);
  table.appendChild(thead);

  for (j = 0; j < objects.length; j++) {
    var tbodyTr = document.createElement('tr');
    for (k = 0; k < labels.length; k++) {
      var tbodyTd = document.createElement('td');
      tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
      tbodyTr.appendChild(tbodyTd);
    }
    tbody.appendChild(tbodyTr);
  }
  table.appendChild(tbody);

  container.appendChild(table);
}
