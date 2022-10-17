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
  let finalString = "";
  let number = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      number++;
    } else {
      if (number > 1) {
        finalString += number + str[i];
        number = 1;
      } else {
        finalString += str[i];
      }
    }
  }
  return finalString;
}

module.exports = {
  encodeLine
};
