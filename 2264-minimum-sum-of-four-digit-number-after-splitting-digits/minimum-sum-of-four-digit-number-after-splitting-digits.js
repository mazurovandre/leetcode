/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const arr = num.toString().split('').filter(item => item !== '0').sort();
    let a = '';
    let b = '';

    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            b += arr[i];
        } else {
            a += arr[i];
        }
    }

    return +a + +b;
};