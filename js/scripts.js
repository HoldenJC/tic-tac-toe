function Player(piece){
  this.piece = piece,
  this.moves = "",
  this.name = "",
  this.score = 0;
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
    } else if(userMoves.length === 5){
      endGameMessage();
    }
    if(victory){
      endGameMessage();
    }
  }
};

function endGameMessage(){
  if(currentPlayer === player1.piece && victory){
    $("#endGameText").html(player1.name + " wins");
    $("#endGameText").addClass("bg-success text-white");
    $("#resetButton").delay(1000).fadeIn(800);
    player1.scoreCounter();
  } else if(victory){
    $("#endGameText").html(player2.name + " wins");
    $("#endGameText").addClass("bg-success text-white");
    $("#resetButton").delay(1000).fadeIn(800);
    player2.scoreCounter();
  } else {
    $("#endGameText").html(player1.name + " and " + player2.name + " tie!");
    $("#endGameText").addClass("bg-warning text-white");
    $("#resetButton").delay(1000).fadeIn(800);
  }
}

Player.prototype.scoreCounter = function(){
  this.score++;
  $("#xPlayerScore").html(player1.name + "<br>Wins: " + player1.score);
  $("#oPlayerScore").html(player2.name + "<br>Wins: " + player2.score);
  $("#xPlayerScore").fadeIn().css("display","inline-block");
  $("#oPlayerScore").fadeIn().css("display","inline-block");
}

function playerTurnMessage(){
  if(currentPlayer === player1.piece && !victory){
    $("#endGameText").html(player1.name + "\'s Turn");
  } else if(!victory){
    $("#endGameText").html(player2.name + "\'s Turn");
  }
}

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
        playerTurnMessage();
      }
    } else {
      id = $(this).attr('id');
      if($("#" + id + " > img").length < 1 && !victory){
        player2.moves += id;
        $("#" + id).append("<img src=\"https://i.dlpng.com/static/png/1205847-letter-o-transparent-background-png-o-png-771_771_preview.png\">");
        checkWin(player2.moves);
        currentPlayer = player1.piece;
        playerTurnMessage();
      }
    }
  })
};

var resetForm = function(){
  $(".col").empty();
  player1.moves = "";
  player2.moves = "";
  victory = false;
  if(currentPlayer === "x"){
    $("#endGameText").html(player1.name + "\'s Turn");
  } else {
    $("#endGameText").html(player2.name + "\'s Turn");
  }
}

$(function(){
  attachContactListeners();
  $("#nameForm").submit(function(event){
    event.preventDefault();
    $("#resetGame").click(function(){
      resetForm();
    })

    player1.setName($("#namePlayerX").val());
    player2.setName($("#namePlayerO").val());

    $("#nameForm").fadeOut(600);
    $("#board").delay(600).fadeIn(800);
    $("#endGameText").delay(1500).fadeIn().html(player1.name + "\'s Turn");
  });
});
