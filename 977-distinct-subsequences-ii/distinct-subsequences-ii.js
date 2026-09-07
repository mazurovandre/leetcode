/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const MOD = 1000000007n;
    const end = new Array(26).fill(0n);
    let total = 0n;

    for (let i = 0; i < s.length; i++) {
        const idx = s.charCodeAt(i) - 97;
        const newEnd = (total + 1n) % MOD;
        total = (total - end[idx] + newEnd + MOD) % MOD;
        end[idx] = newEnd;
    }

    return Number(total % MOD);
};