function Player(piece){
  this.piece = piece,
  this.moves = ""
};

var player1 = new Player("x");
var player2 = new Player("o");

var currentPlayer = player1.piece;

function checkWin(userMoves){
  if(userMoves.length > 2){
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
  }
};

function attachContactListeners() {
  var id;
  $(".col").click(function(){
    if(currentPlayer === "x"){
      id = $(this).attr('id');
      player1.moves += id;
      $("#" + id).append("<img src=\"https://www.chilibeach.com/v2/imgs/ico-x.png\">");
      checkWin(player1.moves);
      currentPlayer = player2.piece;
    } else {
      id = $(this).attr('id');
      player2.moves += id;
      $("#" + id).append("<img src=\"https://i.dlpng.com/static/png/1205847-letter-o-transparent-background-png-o-png-771_771_preview.png\">");
      checkWin(player2.moves);
      currentPlayer = player1.piece;
    }
  })
};


$(function(){
  attachContactListeners();


});
