/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let result = 0;
    const ones = s.split('0');
    const limit = 1000000007;

    for (const one of ones) {
        if (one === '') continue;

        const n = one.length;
        const temp = (n / 2) * (2 * n + (n - 1) * (-1));

        result += temp >= limit ? temp % limit : temp;
    }

    return result;
};