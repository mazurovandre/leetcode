/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
    let result = '';

    if (num === 0) return hex[0];

    if (num < 0) {
        num += 2 ** 32;
    }

    while (num > 0) {
        let rem = Math.floor(num % 16);

        result = hex[rem].toString() + result;
        num = Math.floor(num / 16);
    }

    return result;
};