/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (i - hashMap.get(nums[i]) <= k) {
            return true;
        }
        
        hashMap.set(nums[i], i);
    }

    return false;
};