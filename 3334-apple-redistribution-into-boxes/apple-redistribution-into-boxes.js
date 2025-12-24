/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let result = 0;
    let sum = apple.reduce((acc, item) => acc + item, 0);
    capacity.sort((a, b) => b - a);

    for (const value of capacity) {
        sum -= value;
        result++;

        if (sum <= 0) {
            return result;
        }
    };

    return result;
};