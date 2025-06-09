/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   let left = 0;
   let right = nums.length - 1;

   let start = -1;
   let end = -1;

   let startChecked = false;
   let endChecked = false;

   while (left <= right) {
    if (nums[left] === target && !startChecked) {
        start = left;
        startChecked = true;
    }

    if (nums[right] === target && !endChecked) {
        end = right;
        endChecked = true;
    }

    if (!startChecked) {
        left++;
    }

    if (!endChecked) {
        right--;
    }

    if (endChecked && startChecked) {
        break;
    }
   }

   return [start, end];
};