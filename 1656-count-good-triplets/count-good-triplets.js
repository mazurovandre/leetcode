/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let result = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if (i === j) continue;
            if (Math.abs(arr[i] - arr[j]) > a) continue;

            for (let k = j; k < arr.length; k++) {
                if (i === k || j === k) continue;
                if (Math.abs(arr[j] - arr[k]) > b) continue;
                if (Math.abs(arr[i] - arr[k]) > c) continue;
                
                result++;
            }
        }
    }

    return result;
};