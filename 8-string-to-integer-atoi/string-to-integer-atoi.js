/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const target = s.trim();
    let isPositive = true;
    let numbers = '';

    for (let i = 0; i < target.length; i++) {
        const letter = target[i];
        
        if (i === 0 && letter === '-') {
            isPositive = false;
            continue;
        }
        if (i === 0 && letter === '+') {
            continue;
        }

        if (Number(letter) == letter && letter !== ' ') {
            numbers += letter;
        } else {
            break;
        }
    }

    if (!numbers) return 0;
    
    let result = parseInt(numbers, 10) * (isPositive ? 1 : -1);
    result = Math.min(result, Math.pow(2, 31) - 1);
    result = Math.max(result, Math.pow(-2, 31))

    return result;
};