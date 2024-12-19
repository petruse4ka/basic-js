const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = String(n).split('');
  
  function calculateSum(arr) {
  let sum = 0;

  arr.forEach((digit) => {
    sum += parseFloat(digit);
  })

  if (sum > 9) {
    const array = String(sum).split('');
    return calculateSum(array);
  }

  return sum;
  }

 return calculateSum(arr);

}

module.exports = {
  getSumOfDigits
};
