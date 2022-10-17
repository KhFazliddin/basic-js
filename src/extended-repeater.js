const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let arr = [];
  let i = 0
  if (Number.isInteger(options.additionRepeatTimes)) {

    while (i < options.additionRepeatTimes) {
      if (options.addition === null || options.addition === false) {
        arr.push(String(options.addition))
      } else {
        arr.push(options.addition)
      }
      i++
    }

  } else {
    if (options.addition === null || options.addition === false) {
      arr.push(String(options.addition))
    } else {
      arr.push(options.addition)
    }
  }
  let string = '';
  (options.additionSeparator) ? string = `${String(str)}${arr.join(options.additionSeparator)}` : string = `${String(str)}${arr.join('|')}`;
  let arr1 = [];
  let j = 0;
  if (Number.isInteger(options.repeatTimes)) {
    while (j < options.repeatTimes) {
      arr1.push(string)
      j++
    }
  } else {
    arr1.push(string)
  }
  let result = '';
  (options.separator) ? result = arr1.join(options.separator) : result = arr1.join('+');
  return result
}

module.exports = {
  repeater
};
