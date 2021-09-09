var phase=1;
var car = Math.floor(Math.random()*3);
var alldoors = [door1,door2,door3];


function newGame() {

  var door1 = document.getElementById("door1");
  var door2 = document.getElementById("door2");
  var door3 = document.getElementById("door3");
  //restart();
  phase = 1;
  car = Math.floor(Math.random() * 3); // Door with car

  door1.src = "a5/js/media/door1.png";
  document.getElementById(door1.id).disabled = false;

  door2.src = "a5/js/media/door2.png";
  document.getElementById(door2.id).disabled = false;

  door3.src = "a5/js/media/door3.png";
  document.getElementById(door3.id).disabled = false;

  document.getElementById("wonGame").innerHTML = "";
  document.getElementById("lostGame").innerHTML = "";
  document.getElementById("status").innerHTML = "";

}

function doorChosen(d) {
  //alert(door1.src);
  var door1 = document.getElementById("door1");
  var door2 = document.getElementById("door2");
  var door3 = document.getElementById("door3");

  var alldoors = [door1,door2,door3];
  if (phase==1){

    var doornotshown=pickDoorNotToShow(3, d, car);

    alldoors[doornotshown].src = "a5/js/media/nothingHere.png";
    document.getElementById(alldoors[doornotshown].id).disabled = true;

    document.getElementById("status").innerHTML =
    "You selected door " + (d+1) +
    "<br>Door "+(doornotshown+1)+" does not have the car and has been removed"+
    "<br>Would you like to stay with your original door?"+
    "<br>Choose one of the two doors available.";
    //jQuery("#btn"+doornotshown+1).attr("disabled", true);
    //$(this).attr("disabled", "disabled");
    phase=2;
  }
  else if (phase==2) {

    document.getElementById("status").innerHTML = "";
    document.getElementById("wonGame").style.backgroundColor = "lightgreen";
    document.getElementById("lostGame").style.backgroundColor = "indianred";

    if (d==car) {
      alldoors[car].src="a5/js/media/car.png";

      document.getElementById("wonGame").innerHTML =
      "YOU WON!" + "<br>Door #" + (d+1) + " contained the car";

    }
    else {
      alldoors[d].src="a5/js/media/TooBad.png";
      alldoors[car].src="a5/js/media/car.png";
      document.getElementById("lostGame").innerHTML =
      "YOU LOST!" + "<br>Door #" + (car+1) + " contained the car";
    }
    phase=0;
  }
}
function pickDoorNotToShow(N,chosen,car) {
  if (chosen==car){

    var r = chosen;
    while (r==chosen) {
      r = Math.floor(Math.random()*N);
    }
  }
  else {
    for (var i = 0; i < N; i++) {
      if(i!=chosen && i!=car) {
        r=i;
      }
    }
  }

  return r

}
