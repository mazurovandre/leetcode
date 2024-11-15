/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = {};
	const stack = [];
    
	nums2.forEach(num => {
		while (stack.length > 0 && stack[stack.length - 1] < num) {
			map[stack.pop()] = num;
		}

		stack.push(num);
	});
	
	return nums1.map(num => map[num] ?? -1);
};