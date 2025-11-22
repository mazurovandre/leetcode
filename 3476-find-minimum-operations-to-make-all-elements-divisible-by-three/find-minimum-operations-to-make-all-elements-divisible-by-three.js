/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.reduce((acc, num) => acc + (num % 3 ? 1 : 0), 0);
};