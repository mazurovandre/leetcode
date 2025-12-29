/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    return num.toString().split('').reduce((acc, item) => num % +item ? acc : acc + 1, 0);
};