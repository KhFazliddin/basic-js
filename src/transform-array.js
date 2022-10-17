const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let res = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  arr.forEach((elem, index) => {
    switch (elem) {
      case "--discard-prev": {
        if (index !== 0 || arr[index - 1] !== "deleted") {
          res.pop();
          res.push("deleted");
        }
        break;
      }

      case "--discard-next": {
        if (index < arr.length) {
          arr.splice(index, 1);
          res.push("deleted");
        }
        break;
      }

      case "--double-prev": {
        if (res.length !== 0 && res[res.length - 1] !== "deleted") {
          res.push(res[res.length - 1]);
        }
        break;
      }

      case "--double-next": {
        if (arr[index + 1]) {
          res.push(arr[index + 1]);
        }
        break;
      }

      default: {
        res.push(elem);
        break;
      }
    }
  });

  return res.filter((elem) => elem !== "deleted");
}

module.exports = {
  transform,
};
