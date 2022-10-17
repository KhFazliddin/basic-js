const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let array = number.split("-"); //преобразуем строку в массив без '-'
  return array.length === 6 && array.every((i) => /^[A-F\d]{2}$/.test(i)); //проверяем соответствует ли образованный массив длине и что каждый символ этого массива состоит из цифр от 0 до 9 или из букв от A до F
}
module.exports = {
  isMAC48Address,
};
