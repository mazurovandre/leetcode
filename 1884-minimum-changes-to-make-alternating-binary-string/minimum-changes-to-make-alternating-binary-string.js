/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let res = 0;
    let res2 = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i % 2) {
            s.charAt(i) === '1' ? res2++ : res++;
        } else {
            s.charAt(i) === '0' ? res2++ : res++;
        }
    }

    return Math.min(res, res2);
};