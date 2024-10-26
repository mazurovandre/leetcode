/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        
        let left = i + 1;
        let right = sortedNums.length - 1;

        while (left < right) {
            const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                left++;
                right--;

                while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                    left++;
                }
            }
        }
    }

    return result;
};