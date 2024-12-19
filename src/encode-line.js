const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let array = str.split('');
  let testLetter = '';
  let counter = 0;
  
  array.forEach((letter, index) => {
    if (letter === testLetter) {
      counter += 1;
      if (index === array.length - 1) {
        result += `${counter}${testLetter}`;
      }
    } else {
      if (counter > 1) {
        result += `${counter}${testLetter}`;
      } else {
        result += `${testLetter}`
      }
      testLetter = letter;
      counter = 1;
      if (index === array.length - 1) {
        result += `${testLetter}`;
      }
    }
  });

  return result;
}

module.exports = {
  encodeLine
};
