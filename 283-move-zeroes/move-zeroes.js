/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === 0) {
            nums.push(...nums.splice(left, 1));
            right--;
        } else if (nums[right] === 0) {
            nums.push(...nums.splice(right, 1));
            right--;
        } else {
            left++;
            right--;
        }
    }

    return nums;
};