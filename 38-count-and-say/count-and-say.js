/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    const str = countAndSay(n - 1);

    let result = '';
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += count + str[i - 1];
            count = 1;
        }
    }

    result += count + str[str.length - 1];
    
    return result;
};