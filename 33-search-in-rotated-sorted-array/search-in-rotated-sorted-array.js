/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const leftValue = nums[left];
        const rightValue = nums[right];
        const middleValue = nums[middle];

        if (middleValue === target) {
            return middle;
        }

        if (leftValue <= middleValue) {
            if (target > middleValue || target < leftValue) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        } else {
            if (target < middleValue || target > rightValue) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
    }

    return -1;
};