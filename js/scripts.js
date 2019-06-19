function Player(piece){
  this.piece = piece,
  this.moves = ""
};

var player1 = new Player("x");
var player2 = new Player("o");

var currentPlayer = player1.piece;

function checkWin(userMoves){
  if (userMoves.includes("1") && userMoves.includes("2") && userMoves.includes("3")){
    alert("victory");
  } else if(userMoves.includes("1") && userMoves.includes("5") && userMoves.includes("9")) {
    alert("victory");
  } else if(userMoves.includes("1") && userMoves.includes("4") && userMoves.includes("7")) {
    alert("victory");
  } else if(userMoves.includes("2") && userMoves.includes("5") && userMoves.includes("8")) {
    alert("victory");
  } else if(userMoves.includes("3") && userMoves.includes("5") && userMoves.includes("7")) {
    alert("victory");
  } else if(userMoves.includes("3") && userMoves.includes("6") && userMoves.includes("9")) {
    alert("victory");
  } else if(userMoves.includes("4") && userMoves.includes("5") && userMoves.includes("6")) {
    alert("victory");
  } else if(userMoves.includes("7") && userMoves.includes("8") && userMoves.includes("9")) {
    alert("victory");
  } else {
    alert("keep playing");
  }
};

function attachContactListeners() {
  $(".col").click(function(){
    if(currentPlayer === "x"){
      player1.moves += $(this).attr('id');
      currentPlayer = player2.piece;
    } else {
      player2.moves += $(this).attr('id');
      currentPlayer = player1.piece;
    }
  })
};


$(function(){
  attachContactListeners();




});
