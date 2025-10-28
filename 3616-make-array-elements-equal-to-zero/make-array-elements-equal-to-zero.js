/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    let result = 0;
    const sum = nums.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;
    let rightSum = sum;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (leftSum - rightSum >= 0 && leftSum - rightSum <= 1) {
                result++;
            }
            if (rightSum - leftSum >= 0 && rightSum - leftSum <= 1) {
                result++;
            }
        } else {
            leftSum += nums[i];
            rightSum -= nums[i];
        }
    }
    
    return result;
};