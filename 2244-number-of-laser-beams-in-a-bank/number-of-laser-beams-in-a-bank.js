/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let result = 0;
    let temp = 0;

    for (let i = 0; i < bank.length; i++) {
        let rowLasers = 0;

        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                rowLasers++;
            }
        }
        if (rowLasers) {
            result += temp * rowLasers;
            temp = rowLasers;
        }
    }

    return result;
};