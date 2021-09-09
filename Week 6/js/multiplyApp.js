function makeIt() {

  //COLLECT THE NUMBER OF TERMS - ROWS AND COLUMNS IN THE TABLE
  var nTerms = document.getElementById("nTerms").value;

  //MAKE THE TABLE
  //TASK 1: MAKE THE TABLE TAG
  var tableString = "<table>";

  //TASK 2: ADD ROWS FOR EACH TERM IN THE MULTIPLICATION
  for (var r = 1; r <= nTerms; r++) {
    //1. FIND THE TABLE ELEMENT AND ADD A NEW ROW
    tableString += "<tr>"

    //2. CONSTRUCT EACH OF THE ROW DATA COLUMNS
    for (var c = 1; c < nTerms; c++) {
      var value = r * c;
      tableString += "<td>" + value + "</td>";
    }
    tableString += "</tr>";
  }
  tableString += "</table>";

  //DISPLAY THE TABLE
  var mTable = document.getElementById("outputTable");
  mTable.innerHTML = tableString;
}
