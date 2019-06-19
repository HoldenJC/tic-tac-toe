function Player(piece){
  this.piece = piece,
  this.moves = "",
  this.name = ""
};

Player.prototype.setName = function(name){
  this.name = name;
}

var player1 = new Player("x");
var player2 = new Player("o");

var victory = false;

var currentPlayer = player1.piece;

function checkWin(userMoves){
  if(userMoves.length > 2 && !victory){
    if (userMoves.includes("1") && userMoves.includes("2") && userMoves.includes("3")){
      victory = true;
    } else if(userMoves.includes("1") && userMoves.includes("5") && userMoves.includes("9")) {
      victory = true;
    } else if(userMoves.includes("1") && userMoves.includes("4") && userMoves.includes("7")) {
      victory = true;
    } else if(userMoves.includes("2") && userMoves.includes("5") && userMoves.includes("8")) {
      victory = true;
    } else if(userMoves.includes("3") && userMoves.includes("5") && userMoves.includes("7")) {
      victory = true;
    } else if(userMoves.includes("3") && userMoves.includes("6") && userMoves.includes("9")) {
      victory = true;
    } else if(userMoves.includes("4") && userMoves.includes("5") && userMoves.includes("6")) {
      victory = true;
    } else if(userMoves.includes("7") && userMoves.includes("8") && userMoves.includes("9")) {
      victory = true;
    } else if(userMoves.length === 5){``
      alert("tie game");
    }
    if(victory){
      $("#victoryText").html(currentPlayer + " wins");
    }
  }
};

function attachContactListeners() {
  var id;
  $(".col").click(function(){
    if(currentPlayer === "x"){
      id = $(this).attr('id');
      if($("#" + id + " > img").length < 1 && !victory){
        player1.moves += id;
        $("#" + id).append("<img src=\"https://www.chilibeach.com/v2/imgs/ico-x.png\">");
        checkWin(player1.moves);
        currentPlayer = player2.piece;
      }
    } else {
      id = $(this).attr('id');
      if($("#" + id + " > img").length < 1 && !victory){
        player2.moves += id;
        $("#" + id).append("<img src=\"https://i.dlpng.com/static/png/1205847-letter-o-transparent-background-png-o-png-771_771_preview.png\">");
        checkWin(player2.moves);
        currentPlayer = player1.piece;
      }
    }
  })
};


$(function(){
  attachContactListeners();
  $("#nameForm").submit(function(event){
    event.preventDefault();

    player1.setName($("#namePlayerX").val());
    player2.setName($("#namePlayerO").val());

    $("#nameForm").fadeOut(600);
    $("#board").delay(600).fadeIn(800);


  });
});
