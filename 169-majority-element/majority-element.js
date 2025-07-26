/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const dict = {};
    
    for (let num of nums) {
        dict[num] = (dict[num] || 0) + 1;
        if (dict[num] > nums.length / 2) {
            return num;
        }
    }
};