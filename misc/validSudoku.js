const isValidSudoku = function (board) {

  for (let i = 0; i < 9; i++) {
    // Hashsets
    let row = new Set();
    let col = new Set();
    let box = new Set();
    for (let j = 0; j < 9; j++) {
      // row iteration console.log(board[i][j]) 
      // column iteration console.log(board[j][i])

      debugger;
      rowValue = board[i][j]
      debugger;
      colValue = board[j][i]
      debugger;
      boxValue = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
      debugger;

      if (rowValue !== '.') {
        if (row.has(rowValue)) {
          return false;
        } else {
          row.add(rowValue);
        }
      }
      debugger;

      if (colValue !== '.') {
        if (col.has(colValue)) {
          return false;
        } else {
          col.add(colValue);
        }
      }
      debugger;

      if (boxValue !== '.') {
        if (box.has(boxValue)) {
          return false;
        } else {
          box.add(boxValue);
        }
      }
      debugger;
    }
  }

  return true; 
}

board =
[["5", "3", ".", ".", "7", ".", ".", ".", "."]
, ["6", ".", ".", "1", "9", "5", ".", ".", "."]
, [".", "9", "8", ".", ".", ".", ".", "6", "."]
, ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
, ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
, ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
, [".", "6", ".", ".", ".", ".", "2", "8", "."]
, [".", ".", ".", "4", "1", "9", ".", ".", "5"]
, [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(isValidSudoku(board));

// row / 3 * 3 + column / 3

// vertical traversal 
// Math.floor(0 / 3) = 0
// Math.floor(1 / 3) = 0 
// Math.floor(2 / 3) = 0

// horizontal traversal 
// 0 % 3 = 0
// 1 % 3 = 1
// 2 % 3 = 2

// 3x3 box
// board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * i%3 + j%3]

// board = 

//      0   1    2   3   4   5   6   7   8
// 0 [["5","3",".",".","7",".",".",".","."]
// 1 ,["6",".",".","1","9","5",".",".","."]
// 2 ,[".","9","8",".",".",".",".","6","."]
// 3 ,["8",".",".",".","6",".",".",".","3"]
// 4 ,["4",".",".","8",".","3",".",".","1"]
// 5 ,["7",".",".",".","2",".",".",".","6"]
// 6 ,[".","6",".",".",".",".","2","8","."]
// 7 ,[".",".",".","4","1","9",".",".","5"]
// 8 ,[".",".",".",".","8",".",".","7","9"]]


// [0, 0], [0, 1] ,[0,2]
// [4, 0], [4, 1] ,[4,2]
// [8, 0], [8, 1] ,[8,2]