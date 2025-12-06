/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    const startBin = start.toString(2).split('').reverse();
    const goalBin = goal.toString(2).split('').reverse();
    const length = Math.max(startBin.length, goalBin.length);
    let result = 0;

    for (let i = 0; i < length; i++) {
        const startVal = Number(startBin[i]) || 0;
        const goalVal = Number(goalBin[i]) || 0;

        if (startVal !== goalVal) {
            result++;
        }
    }

    return result;
};