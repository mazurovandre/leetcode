/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    const str = countAndSay(n - 1);

    const result = [];
    let count = 0;
    let currentChar = str[0];

    for (const char of str) {
        if (char === currentChar) {
            count++;
        } else {
            result.push(`${count}${currentChar}`);
            currentChar = char;
            count = 1;
        }
    }

    if (count) {
        result.push(`${count}${currentChar}`);
    }
    
    return result.join('');
};