const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = true;
    if (direction === false) {
      this.direction = false;
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let encryptedMessage = "";
    let keyindex = 0;

    for (let i = 0; i < message.length; i++) {
      let letter = message[i].toUpperCase();
      if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
        let mi = letter.charCodeAt() - 65;
        let ki = key[keyindex % key.length].toUpperCase().charCodeAt() - 65;
        let encryptLetter = (mi + ki) % 26;
        encryptedMessage += String.fromCharCode(encryptLetter + 65);
        keyindex++;
      } else {
        encryptedMessage += letter;
      }
    }
    if (this.direction === true) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split("").reverse().join("");
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let message = "";
    let keyindex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let encryptLetter = encryptedMessage[i];
      if (encryptLetter.charCodeAt() > 64 && encryptLetter.charCodeAt() < 91) {
        let ci = encryptLetter.charCodeAt() - 65;
        let ki = key[keyindex % key.length].toUpperCase().charCodeAt() - 65;
        let letter = (ci - ki + 26) % 26;
        message += String.fromCharCode(letter + 65);
        keyindex++;
      } else {
        message += encryptLetter;
      }
    }
    if (this.direction === true) {
      return message;
    } else {
      return message.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
