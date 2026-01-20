/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let tempsum = 0;
        let start = Math.max(0, i - nums[i]);

        while (start <= i) {
            tempsum += nums[start++];
        }

        result += tempsum;
    }

    return result;
};