/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break;
            }

            if (nums[i] + nums[j] + nums[nums.length - 1] + nums[nums.length - 2] < target) {
                continue;
            }

            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    return result;
};