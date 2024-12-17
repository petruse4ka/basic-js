const { NotImplementedError } = require('../extensions/index.js');

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
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
    let encryptedMessage = '';
    let messageUppercase = message.toUpperCase();
    let keyUppercase = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < messageUppercase.length; i += 1) {
      const letter = messageUppercase[i];
      if (alphabet.includes(letter)) {
        const letterIndex = alphabet.indexOf(letter);
        const shiftIndex = alphabet.indexOf(keyUppercase[keyIndex % keyUppercase.length]);
        const newIndex = (letterIndex + shiftIndex) % alphabet.length;
        encryptedMessage += alphabet[newIndex];
        keyIndex += 1;
      } else {
        encryptedMessage += letter;
      }
    }

    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
    let decryptedMessage = '';
    let encryptedMessageUppercase = encryptedMessage.toUpperCase();
    let keyUppercase = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessageUppercase.length; i += 1) {
      const letter = encryptedMessageUppercase[i];
      if (alphabet.includes(letter)) {
        const letterIndex = alphabet.indexOf(letter);
        const shiftIndex = alphabet.indexOf(keyUppercase[keyIndex % keyUppercase.length]);
        const newIndex = (letterIndex - shiftIndex + alphabet.length) % alphabet.length;
        decryptedMessage += alphabet[newIndex];
        keyIndex += 1;
      } else {
        decryptedMessage += letter;
      }
    }

    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
