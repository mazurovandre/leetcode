/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    let knew = k - 1;

    if (!knew) return true;

    for (let i = k + 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] && nums[i - k] > nums[i - k - 1]) {
            knew--;
        } else {
            knew = k - 1;
        }

        if (!knew) return true;
    }

    return false;
};