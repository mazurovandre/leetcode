/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;

    while (right > left) {
        const x = right - left;
        const y = Math.min(height[left], height[right]);
        const value = x * y;

        if (value > result) {
            result = value;
        }

        if (height[right] > height[left]) {
            left++;
        } else {
            right--;
        }
    }

    return result;
};