/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sorted = nums.sort((a, b) => a - b);

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] !== 1) {
            return sorted[i] - 1;
        }
    }

    return sorted[0] === 0 ? sorted[sorted.length - 1] + 1 : 0;
};