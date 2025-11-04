/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const distance1 = Math.abs(z - x);
    const distance2 = Math.abs(z - y);

    if (distance1 > distance2) return 2;
    if (distance1 < distance2) return 1;
    return 0;
};