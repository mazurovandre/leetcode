/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const result = nums1.filter(num => nums2.includes(num));

    return [...new Set(result)];
};