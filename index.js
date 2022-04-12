// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  // if(confirm(`Congrats, ${winner} wins!`)){
  // The code here will be exectued if you press on OK button that will pop on the window
  const box1 = document.getElementById("1").innerHTML;
  const box2 = document.getElementById("2").innerHTML;
  const box3 = document.getElementById("3").innerHTML;
  const box4 = document.getElementById("4").innerHTML;
  const box5 = document.getElementById("5").innerHTML;
  const box6 = document.getElementById("6").innerHTML;
  const box7 = document.getElementById("7").innerHTML;
  const box8 = document.getElementById("8").innerHTML;
  const box9 = document.getElementById("9").innerHTML;

  console.log(box1 == winner && box2 == winner && box3 == winner);
  if (
    (box1 == winner && box2 == winner && box3 == winner) ||
    (box4 == winner && box5 == winner && box6 == winner) ||
    (box7 == winner && box8 == winner && box9 == winner) ||
    (box1 == winner && box5 == winner && box9 == winner) ||
    (box3 == winner && box5 == winner && box7 == winner) ||
    (box1 == winner && box4 == winner && box7 == winner) ||
    (box2 == winner && box5 == winner && box8 == winner) ||
    (box3 == winner && box6 == winner && box9 == winner)
  ) {
    window.alert(`Congrats, ${winner} wins!`);
    restartGame();
  }
}
/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

var count = 0;

function clickButton(index) {
  document.getElementById(index).disabled = true;

  console.log(`Button number ${index} is clicked`);
  if (count % 2 == 0) {
    //even
    fillButton(index, "X");
    winningAlert("X");
  } else {
    fillButton(index, "O");
    winningAlert("O");
  }

  if (count == 9) {
    window.alert(`DRAW`);
    restartGame();
  }

  count++;
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner

// function checkWinner(){
//   // if (  box1 ==  box2 &&  box3 ){
//   //   window.alert("Game won. Please reset the game.");
//   //  } else if ( box1 ==  box4 &&  box7 ){
//   //   window.alert("Game won. Please reset the game.");
//   //  }
//    winningAlert(winner);
// }

function restartGame() {
  const box1 = (document.getElementById("1").innerHTML = "");
  const box2 = (document.getElementById("2").innerHTML = "");
  const box3 = (document.getElementById("3").innerHTML = "");
  const box4 = (document.getElementById("4").innerHTML = "");
  const box5 = (document.getElementById("5").innerHTML = "");
  const box6 = (document.getElementById("6").innerHTML = "");
  const box7 = (document.getElementById("7").innerHTML = "");
  const box8 = (document.getElementById("8").innerHTML = "");
  const box9 = (document.getElementById("9").innerHTML = "");

  document.getElementById("1").disabled = false;
  document.getElementById("2").disabled = false;
  document.getElementById("3").disabled = false;
  document.getElementById("4").disabled = false;
  document.getElementById("5").disabled = false;
  document.getElementById("6").disabled = false;
  document.getElementById("7").disabled = false;
  document.getElementById("8").disabled = false;
  document.getElementById("9").disabled = false;

  count = 0;
  fillButton(index, "X");
}
