/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        let totalTime = 0;
        
        for (let pile of piles) {
            totalTime += Math.ceil(pile / middle);
        }

        if (totalTime <= h) {
            result = middle;
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return result;
};