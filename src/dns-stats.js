const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let array = []
  let arrayNew = []

  for (let i = 0; i < domains.length; i++) {
    array.push(domains[i].split('.').join('.').split('.'))
  }

  let arrayCopy = (JSON.parse(JSON.stringify(array)));

  function recursion() {
    let isEmpty = a => Array.isArray(a) && a.every(isEmpty);

    if (isEmpty(array)) {
      return array;
    } else {
      array.forEach((el => el.splice(0, 1)));
      let arr = array.slice().join(' ');
      arrayCopy.push(JSON.parse(JSON.stringify(arr)));
      recursion()
    }
  }
  recursion();
  let result = arrayCopy.join(' ').split(' ');
  let filtered = result.filter(function (el) {
    return el != false;
  });
  for (let i = 0; i < filtered.length; i++) {
    arrayNew.push(filtered[i].split(',').reverse().join('.'))
  }

  let resultedArray = arrayNew.map(el => `.${el}`)

  const countedNames = resultedArray.reduce((allNames, name) => {
    allNames[name] = allNames[name] || 0;
    allNames[name]++;
    return allNames;
  }, {});

  return countedNames;
}

module.exports = {
  getDNSStats
};
