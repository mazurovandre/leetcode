/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const helper = (nums, level, currentXOR) => {
        if (level === nums.length) return currentXOR;

        const include = helper(nums, level + 1, currentXOR ^ nums[level]);
        const exclude = helper(nums, level + 1, currentXOR);

        return include + exclude;
    };

    return helper(nums, 0, 0);
};