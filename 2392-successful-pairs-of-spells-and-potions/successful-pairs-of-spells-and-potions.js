/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const result = [];
    const size = potions.length;

    spells.forEach(spell => {
        let left = 0;
        let right = size - 1;
        let idx = size;
        const need = Math.ceil(success / spell);

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);

            if (potions[middle] >= need) {
                idx = middle;
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        result.push(size - idx);
    });

    return result;
};