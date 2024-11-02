/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const summed = [...nums1, ...nums2].sort((a, b) => a - b);
    const middle = Math.floor((summed.length - 1) / 2);

    if (summed.length % 2) {
        return summed[middle];
    } else {
        return (summed[middle] + summed[middle + 1]) / 2;
    }
};