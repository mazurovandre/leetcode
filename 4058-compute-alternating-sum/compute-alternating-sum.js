/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    return nums.reduce((acc, num, index) => index % 2 ? acc - num : acc + num, 0);
};