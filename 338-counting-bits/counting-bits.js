/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = [];
    
    while (n > -1) {
        const count = n.toString(2).split('').reduce((acc, num) => acc + (num === '1' ? 1 : 0), 0);

        result.unshift(count)
        n--;
    }

    return result;
};