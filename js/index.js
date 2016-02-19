var TicTacToe = {

  gameBoard: [0, 0, 0,
              0, 0, 0,
              0, 0, 0],
  user: 'X',
  yOn: '',

  //Prints value and assigns gameBoard index to the user who added the value
  move: function(val) {
    
    if (this.gameBoard[val] == 0) {
      $('td[val=' + val + ']').html(TicTacToe.user)
      TicTacToe.gameBoard[val] = TicTacToe.user;
    } 
    else {
      alert("Essaie une qutre case!");
    }
  },

  winnerCheck: function() {

    //Horizontal wins
    for (var x = 0; x < 7; x = x + 3) {
      var c = x + 1;
      if (this.gameBoard[x] == 'X' && this.gameBoard[c] == 'X' && this.gameBoard[c + 1] == 'X') {
        alert("le joueur X gagne!");
        yOn = prompt("Would you like to play again '(y/n)'?");
        this.playAgain();
      } 
      else if (this.gameBoard[x] == 'O' && this.gameBoard[c] == 'O' && this.gameBoard[c + 1] == 'O') {
        alert("le joueur O gagne!");
        yOn = prompt("Would you like to play again '(y/n)'?");
        this.playAgain();
      }
    }
    //Vertical wins
    for (var x = 0; x < 3; x = x + 1) {
      var c = x + 3;
      if (this.gameBoard[x] == 'X' && this.gameBoard[c] == 'X' && this.gameBoard[c + 3] == 'X') {
        alert("le joueur X gagne!");
        yOn = prompt("Vous voulez jouer encore'(y/n)'?");
        this.playAgain();
      } 
      else if (this.gameBoard[x] == 'O' && this.gameBoard[c] == 'O' && this.gameBoard[c + 3] == 'O') {
        alert("le joueur O gagne!");
        yOn = prompt("Vous voulez jouer encore' '(y/n)'?");
        this.playAgain();
      }
    }
    
    //Takes care of cross wins
    for (var x = 0; x < 3; x = x + 2) {
      var c = 4;
      if (this.gameBoard[x] == 'X' && this.gameBoard[c] == 'X' && this.gameBoard[c * 2] == 'X' ||
        this.gameBoard[x] == 'X' && this.gameBoard[c] == 'X' && this.gameBoard[c + 2] == 'X') {
        alert("le joueur X gagne!");
        yOn = prompt("Vous voulez jouer encore''(y/n)'?");
        this.playAgain();
      } 
      else if (this.gameBoard[x] == 'O' && this.gameBoard[c] == 'O' && this.gameBoard[c * 2] == 'O' ||
        this.gameBoard[x] == 'O' && this.gameBoard[c] == 'O' && this.gameBoard[c + 2] == 'O') {
        alert("le joueur O gagne !");
        yOn = prompt("Vous voulez jouer encore''(y/n)'?");
        this.playAgain();
      }
    }
  },
  playAgain: function() {
    if(yOn.toLowerCase() === 'y'){
        this.reset();
      }
      else if(yOn.toLowerCase() === 'n'){
        alert("AU REVOIR.")
      }
   },
  
  reset: function(){
    for(y = 0; y < this.gameboard.length; y++){
      this.gameboard[y] = 0;
    }
   }
};


$(document).ready(function() {
  var countX = 0;
  
  $("td").on('click', function(x) {
    val = $(this).attr('val');
    TicTacToe.move(val);

    if (countX >= 2) {
      TicTacToe.winnerCheck();
    }
    
    if (TicTacToe.user == 'X') {
      TicTacToe.user = 'O';
      countX = countX + 1;
    } 
    else {
      TicTacToe.user = 'X';
    }
  })
  
})