const { NotImplementedError } = require("../extensions/index.js");

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
  const indexes = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) indexes.push(i);
  }
  const sorted = arr.filter((v) => v !== -1).sort((a, b) => a - b);
  const res = [];
  for (let i = 0, d = 0; i < arr.length; i += 1) {
    if (indexes.includes(i)) {
      res.push(-1);
      d += 1;
      continue;
    }
    res.push(sorted[i - d]);
  }
  return res;
}

module.exports = {
  sortByHeight,
};
