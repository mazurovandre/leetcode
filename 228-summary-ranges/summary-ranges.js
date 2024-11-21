/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let index = 0;

    while (index < nums.length) {
        let num = nums[index];
        let lastNum = '';

        while (index + 1 < nums.length && nums[index + 1] === nums[index] + 1) {
            index++;
        }

        lastNum = nums[index];

        if (num === lastNum) {
            result.push(String(num));
        } else {
            result.push(num + '->' + lastNum);
        }

        index++;
    }

    return result;
};