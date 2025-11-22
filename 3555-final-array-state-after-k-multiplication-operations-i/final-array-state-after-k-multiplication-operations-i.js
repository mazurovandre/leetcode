/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    while (k) {
        const minValue = Math.min(...nums);
        const index = nums.findIndex(num => num === minValue);
        
        nums[index] *= multiplier;
        k--;
    }

    return nums;
};