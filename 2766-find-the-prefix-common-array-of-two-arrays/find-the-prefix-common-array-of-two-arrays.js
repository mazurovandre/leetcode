/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const map = {};
    const result = [];

    for (let i = 0; i < A.length; i++) {
        const valA = map[A[i]] ?? 0;
        map[A[i]] = valA + 1;

        const valB = map[B[i]] ?? 0;
        map[B[i]] = valB - 1;

        const count = Object.entries(map).reduce((acc, [key, val]) => {
            return val === 0 ? acc + 1 : acc;
        }, 0);

        result.push(count);
    }

    return result;
};