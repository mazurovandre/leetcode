/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i];

            while (stack.length && temp > stack[stack.length - 1][0]) {
                const [_, stackIndex] = stack.pop();

                result[stackIndex] = i - stackIndex;
            }

            stack.push([temp, i]);
        }

        return result;
};