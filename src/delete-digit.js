const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let biggestNumber = -999999999999999;
  let number = String(n).split('');
  
  for (let i = 0; i < number.length; i += 1) {
    const testNumber = parseFloat(number.slice(0, i).concat(number.slice(i + 1, number.length)).join(''));
    if (testNumber > biggestNumber) {
      biggestNumber = testNumber;
    }
  }

  return biggestNumber;
}

module.exports = {
  deleteDigit
};
