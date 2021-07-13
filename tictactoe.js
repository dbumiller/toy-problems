/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  var board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
  ];
      var horizontalChecker = (row, char, board) => {
      if (board[row][1] === char && board[row][2] === char) {
          return true;
      }
  }

  var verticalChecker = (column, char, board) => {
      if (board[1][column] === char && board[2][column] === char) {
          return true;
      }
  }

  var diagonalDownRightChecker = (char, board) => {
      if (board[1][1] === char && board[2][2] === char) {
          return true;
      }
  }

  var diagonalDownLeftChecker = (char, board) => {
      if (board[1][1] === char && board[2][0] === char) {
          return true;
      }
  }

  for (var i = 0; i < moves.length; i++) {
      var x = moves[i][0];
      var y = moves[i][1];
      if (i % 2 === 0) {
          board[x][y] = 'X';
      } else {
          board[x][y] = 'O';
      }
  }

  for (var i = 0; i < board.length; i++) {
      if (board[i][0] !== '') {
          var char = board[i][0];

          if (horizontalChecker(i, char, board)) {
              if (char === 'X') {
                  return 'A';
              } else {
                  return 'B';
              }
          }
      }
  }
  for (var i = 0; i < board[0].length; i++) {
      var char = board[0][i];
      if (board[0][i] !== '') {
          if (verticalChecker(i, char, board)) {
              if (char === 'X') {
                  return 'A';
              } else {
                  return 'B';
              }
          }
      }
  }
  if (board[0][0] !== '') {
      var char = board[0][0];
      if (diagonalDownRightChecker(char, board)) {
              if (char === 'X') {
                  return 'A';
              } else {
                  return 'B';
              }
      }
  }
      if (board[0][2] !== '') {
      var char = board[0][2];
      if (diagonalDownLeftChecker(char, board)) {
              if (char === 'X') {
                  return 'A';
              } else {
                  return 'B';
              }
      }
  }
  for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[0].length; j++) {
          if (board[i][j] === '') {
              return 'Pending';
          }
      }
  }

  return 'Draw';
};