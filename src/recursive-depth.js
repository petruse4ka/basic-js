const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;

    if (Array.isArray(arr) === false) {
      count = 0;
      return count;
    }

    arr.forEach(element => {
      if (Array.isArray(element) === true) {
        const depthCount = this.calculateDepth(element) + 1;
        if (depthCount > count) {
          count = depthCount;
        }
      }
    });

    return count;
  }
}

module.exports = {
  DepthCalculator
};
