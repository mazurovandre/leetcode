/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const arr = s.split('');
    const result = new Array(s.length).fill('');

    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = arr[i];
    }

    return result.join('');
};