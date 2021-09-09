//Storing and retrieving key-value pairs using
//HTML5 localStorage

//INITIALIZE THE APP BY LOADING ALL THE PREVIOUSLY SAVED TO-DO ITEMS
function initialize() {
  loadToDoList();
}

//LOADS PREVIOUSLY SAVED TO-DO ITEMS AND DISPLAYS THEM IN THE PAGE
function loadToDoList() {
  //TASK 1: GET THE NUMBER OF KEY-VALUE PAIRS STORED IN LOCAL STORAGE
  var length = localStorage.length; //number of key-value pairs

  //TASK 2: CREATE AN ARRAY TO HOLD THE LIST OF TO-DO ITEMS
  todoList = []; //create empty array

  //TASK 3: COLLECT EACH KEY ITEM AND STORE IT IN THE ARRAY
  for (var i = 0; i < length; i++) {
    todoList[i] = localStorage.key(i);
  }
  todoList.sort();

  //TASK 4: BUILD HTML CODE TO DISPLAY THE LIST OF TO-DO ITEMS
  var markup = "<ul>";
  for (var keyIndex in todoList) {
    //A. ADD A TEXT ELEMENT REPRESENTING THE KEY VALUE
    markup += "<li><span>" + todoList[keyIndex] +"</span>";
    //A. ADD A DELETE BUTTON
    markup += "<input id = '" + todoList[keyIndex] + "' type = 'button' " + "value = 'Delete' onclick = 'deleteTag(id)'></li>";
  }
  markup += "</ul>";

  //TASK 5: ADD THE MARKUP STRING TO THE HTML DOCUMENT
  document.getElementById("searchList").innerHTML = markup;
}

function clearAllItems() {
  //TASK: DELETE ALL KEY-VALUE PAIRS FROM LOCAL STORAGE
  localStorage.clear();
  loadToDoList(); // reload the list of todo items
}

//SAVE A NEW ITEM INTO localStorage
function saveSearch() {
  var keyName = document.getElementById("todoTag");
  var keyValue = "To do item";
  localStorage.setItem(keyName.value, keyValue);

  keyName.value = ""; //clear tag input
  loadToDoList(); //reload the list of todo items
}

//deletes a specific key-value pair from localStorage
function deleteTag(keyName) {
  localStorage.removeItem(keyName);
  loadToDoList(); //reload the list of todo items
}
