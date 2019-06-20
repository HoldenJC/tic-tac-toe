var victory = false;

function Player(piece){
  this.piece = piece,
  this.moves = "",
  this.name = "",
  this.score = 0;
  this.icon = "";
};

Player.prototype.setPlayer = function(name, icon){
  this.name = name;
  this.icon = icon;
}

var player1 = new Player("x");
var player2 = new Player("o");

var currentPlayer = player1.piece;

function checkWin(userMoves){
  if(userMoves.length > 2 && !victory){
    if ((userMoves.includes("1") && userMoves.includes("2") && userMoves.includes("3")) ||
    (userMoves.includes("1") && userMoves.includes("5") && userMoves.includes("9")) ||
    (userMoves.includes("1") && userMoves.includes("4") && userMoves.includes("7")) ||
    (userMoves.includes("2") && userMoves.includes("5") && userMoves.includes("8")) ||
    (userMoves.includes("3") && userMoves.includes("5") && userMoves.includes("7")) ||
    (userMoves.includes("3") && userMoves.includes("6") && userMoves.includes("9")) ||
    (userMoves.includes("4") && userMoves.includes("5") && userMoves.includes("6")) ||
    (userMoves.includes("7") && userMoves.includes("8") && userMoves.includes("9"))) {

      victory = true;

    } else if(userMoves.length === 5){
      endGameMessage();
    }
    if(victory){
      endGameMessage();
    }
  }
};

function createVictoryMessage(player){
  $("#endGameText").html(player.name + " wins");
  $("#endGameText").addClass("bg-success text-white");
  $("#resetButton").delay(800).fadeIn(800);
  player.scoreCounter();
}

Player.prototype.scoreCounter = function(){
  if(victory){
    this.score++;
  }
  $("#xPlayerScore").html(player1.name + "<br>Wins: " + player1.score);
  $("#oPlayerScore").html(player2.name + "<br>Wins: " + player2.score);
  $("#xPlayerScore").fadeIn().css("display","inline-block");
  $("#oPlayerScore").fadeIn().css("display","inline-block");
}

function endGameMessage(){
  if(currentPlayer === player1.piece && victory){
    createVictoryMessage(player1);
  } else if(victory){
    createVictoryMessage(player2);
  } else {
    $("#endGameText").html(player1.name + " and " + player2.name + " tie!");
    $("#endGameText").addClass("bg-warning text-white");
    $("#resetButton").delay(800).fadeIn(800);
    player1.scoreCounter();
  }
}

function playerTurnMessage(){
  if(currentPlayer === player1.piece){
    $("#endGameText").html(player1.name + "\'s Turn");
  } else {
    $("#endGameText").html(player2.name + "\'s Turn");
  }
}

function placeIcon (id,playerA, playerB ){
  if($("#" + id + " > img").length < 1 && !victory){
    playerA.moves += id;
    $("#" + id).append(playerA.icon);
    checkWin(playerA.moves);
    currentPlayer = playerB.piece;
    if(!victory && playerA.moves.length < 5 && playerB.moves.length < 5){
      playerTurnMessage();
    }
  }
}

function attachListeners() {
  $("#board .col").click(function(){
    var id = $(this).attr('id');
    if(currentPlayer === "x"){
      placeIcon(id,player1,player2);
    } else {
      placeIcon(id,player2,player1);
    }
  });
};

function resetForm(){
  $(".col").empty();
  player1.moves = "";
  player2.moves = "";
  victory = false;
  $("#endGameText").removeClass("bg-warning bg-success text-white");
  $("#resetButton").fadeOut(800);
  if(currentPlayer === "x"){
    $("#endGameText").html(player1.name + "\'s Turn");
  } else {
    $("#endGameText").html(player2.name + "\'s Turn");
  }
}

$(function(){
  attachListeners();
  $("#nameForm").submit(function(){
    $("#alertField").empty();
    event.preventDefault();
    $("#resetGame").click(function(){
      resetForm();
    })

    if($("#playerIcon1").val() != $("#playerIcon2").val()){
      player1.setPlayer($("#namePlayerX").val(), "<img src=\"" + $("#playerIcon1").val() + "\">");
      player2.setPlayer($("#namePlayerO").val(), "<img src=\"" + $("#playerIcon2").val() + "\">");
      $("#nameForm").fadeOut(600);
      $("#board").delay(600).fadeIn(800);
      $("#endGameText").delay(1500).fadeIn().html(player1.name + "\'s Turn");
    } else {
      $("#alertField").append("<div id=\"userAlert\" class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>");
      $("#userAlert").append("Please select different icons to continue!");
    }
    
  });
});
