/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(num => {
        const index = nums2.findIndex(item => item === num);
        const slice = nums2.slice(index);

        for (const next of slice) {
            if (next > num) {
                return next;
            }
        }

        return -1;
    })
};