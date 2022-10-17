const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(box) {
  let responce = 0;
  box.forEach(arr => {
      arr.forEach(elem => {
          typeof elem === 'string' && elem.length == 2 && elem.includes('^^') ? res += 1 : null;
      })
  });
  return responce;
}

module.exports = {
  countCats
};
