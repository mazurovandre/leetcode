/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let temp = 0;

    for (const num of nums) {
        if (num === 1) {
            temp = temp + 1;
            result = Math.max(result, temp);
        } else {
            temp = 0;
        }
    }

    return Math.max(result, temp);
};