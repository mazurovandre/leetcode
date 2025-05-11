/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0;

    const isBelowZero = x < 0;
    const res = +Math.abs(x).toString().split('').reverse().join('');

    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31)) return 0;

    return isBelowZero ? -1 * res : res;
};