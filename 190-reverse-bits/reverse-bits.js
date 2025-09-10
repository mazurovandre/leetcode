/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    const bin = n.toString(2);
    let reversed = bin.split('').reverse().join('');
    reversed += '0'.repeat(32 - reversed.length);

    return parseInt(reversed, 2);
};