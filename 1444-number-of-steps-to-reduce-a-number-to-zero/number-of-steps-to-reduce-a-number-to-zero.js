/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let result = 0;

    while(num) {
        num = num % 2 ? num - 1 : num / 2;
        result++;
    }

    return result;
};