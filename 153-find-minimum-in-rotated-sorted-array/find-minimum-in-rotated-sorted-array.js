/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        const leftValue = nums[left];
        const rightValue = nums[right];
        const middleValue = nums[middle];

        if (leftValue < rightValue) {
            return leftValue;
        }

        if (leftValue <= middleValue) {
            left = middle + 1;
        }
        
        if (leftValue > middleValue) {
            right = middle;
        }
    }

    return nums[left];
};