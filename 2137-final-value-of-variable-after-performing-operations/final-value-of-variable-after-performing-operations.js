/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;

    for (const operation of operations) {
        if (operation === '++X' || operation === 'X++') {
            result++;
        } else {
            result--;
        }
    }

    return result;
};