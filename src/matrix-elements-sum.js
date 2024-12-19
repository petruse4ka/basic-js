const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newMatrix = [];
  let counter = 0;

  for (let i = 0; i < matrix[0].length; i += 1) {
    const newRow = [];
    for (let j = 0; j < matrix.length; j += 1) {
      newRow.push(matrix[j][i]);
    }
    newMatrix.push(newRow);
  }

  for (let i = 0; i < newMatrix.length; i += 1) {
    for (let j = 0; j < newMatrix[i].length; j += 1) {
      if (newMatrix[i][j] !== 0) {
        counter += newMatrix[i][j];
      } else {
        j += newMatrix[i].length
      }
    }
  }

  return counter
}

module.exports = {
  getMatrixElementsSum
};
