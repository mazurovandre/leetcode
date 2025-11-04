/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const map = {};
    let result = 0;
    
    for (jewel of jewels) {
        map[jewel] = true;
    }

    for (stone of stones) {
        if (map[stone]) {
            result++;
        }
    }

    return result;
};