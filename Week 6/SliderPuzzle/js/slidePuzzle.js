//TASK 1: KEEP TRACK OF THE LOCATION OF THE EMPTY CELL
var emptyCell = 8;

function movePiece(clickedCell) {
  //TASK 1: CHECK IF THE CELL CLICKED IS NEXT TO THE EMPTY CELL
  if ((clickedCell == emptyCell-1 && emptyCell%3 != 0) ||
      (clickedCell == emptyCell+1 && emptyCell%3 != 2) ||
      (clickedCell == emptyCell-3) || (clickedCell == emptyCell+3)) {

        //TASK 2: SWAP THE CELL CLICKED WITH THE EMPTY CELL
        var newEmptyCell = clickedCell;
        swap(emptyCell, clickedCell);

        //TASK 3: SET THE EMPTY CELL LOCATION
        emptyCell = newEmptyCell;
  }
}

function swap(a, b) {
  //SWAP THE PUZZLE PIECE iMAGES
  var tempPuzzle = document.images[a].src;
  document.images[a].src = document.images[b].src;
  document.images[b].src = tempPuzzle;
}
