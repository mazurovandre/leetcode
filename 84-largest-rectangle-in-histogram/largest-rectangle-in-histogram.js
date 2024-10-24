/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];

    heights.forEach((height, i) => {
        let startIndex = i;
        
        while (stack.length && stack[stack.length - 1][1] > height) {
            const [stackIndex, stackHeight] = stack.pop();

            maxArea = Math.max(maxArea, stackHeight * (i - stackIndex));
            startIndex = stackIndex;
        }

        stack.push([startIndex, height]);
    });

    stack.forEach(([index, height], i) => {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    });

    return maxArea;
};