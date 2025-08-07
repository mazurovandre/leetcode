/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        num = String(num).split('').reduce((acc, item) => acc + +item, 0);
    }

    return num;
};