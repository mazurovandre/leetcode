/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = n.toString().split('');
    let sum = 0;
    let mult = 1;

    for (const num of arr) {
        sum += +num;
        mult *= +num;
    }

    return mult - sum;
};