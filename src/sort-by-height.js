const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] !== -1) { 
      let biggestIndex = i;
      let biggestNumber = array[i];

      for (let j = i - 1; j >= 0; j -= 1) {
        if (array[j] !== -1 && array[j] > biggestNumber) {
          biggestNumber = array[j]; 
          biggestIndex = j;
        }
      }

      if (biggestIndex !== i) {
        array[biggestIndex] = array[i];
        array[i] = biggestNumber;
      }
    }
  }
  return array;
}

module.exports = {
  sortByHeight
};
