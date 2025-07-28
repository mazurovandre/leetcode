/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const hashValue = hash[value];

        if (hashValue !== undefined) {
            return [i, hashValue];
        } else {
            hash[target - value] = i;
        }
    }

    return [];
};