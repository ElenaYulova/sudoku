module.exports = function solveSudoku(matrix) {


  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] == 0) {
        let alreadyUsed = [];
        for (let i = 0; i < 9; i++) {
          alreadyUsed.push(matrix[row][i]);
          alreadyUsed.push(matrix[i][col]);
        };
        const blockRow = Math.floor(row / 3) * 3;
        const blockCol = Math.floor(col / 3) * 3;
        for (let blRow = blockRow; blRow < blockRow + 3; blRow++) {
          for (blCol = blockCol; blCol < blockCol + 3; blCol++) {
            alreadyUsed.push(matrix[blRow][blCol]);
          };
        };
        //       const possibles = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(digit => impossible.indexOf(digit) < 0)
  //       for (let possible = 0; possible < possibles.length; possible++) {
  //         matrix[row][col] = possibles[possible]
  //         const solve = solveSudoku(matrix)
  //         if (solve) return solve
  //       }
  //       matrix[row][col] = 0
  //       return false
  //     }
        const avaliable = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(sudokuNumber => alreadyUsed.indexOf(sudokuNumber) < 0);
        for (let j = 0; j < avaliable.length; j++) {
          matrix[row][col] = avaliable[j];
          const solvedMatrix = solveSudoku(matrix);
          if (solvedMatrix) {
            return solvedMatrix;
          };
        };
        matrix[row][col] = 0;
        return false;
      };
    };
  };
  return matrix;
};