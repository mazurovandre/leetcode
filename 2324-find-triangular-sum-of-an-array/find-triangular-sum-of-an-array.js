/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    const getNextArr = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        const result = [];

        for (let i = 0; i < arr.length - 1; i++) {
            const sum = arr[i] + arr[i + 1];

            result.push(sum % 10);
        }

        return result;
    }

    let result = nums;

    while (result.length > 1) {
        result = getNextArr(result);
    }

    return result[0];
};