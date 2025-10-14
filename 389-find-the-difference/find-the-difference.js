/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = new Map();

    for (let i = 0; i < t.length; i++) {
        const sCount = map.get(s[i]) ?? 0;
        const tCount = map.get(t[i]) ?? 0;

        if (s[i] === t[i]) {
            continue;
        }
        if (s[i]) {
            map.set(s[i], sCount - 1);
        }
        map.set(t[i], tCount + 1);
    }

    for (const [key, val] of map) {
        if (val) return key;
    }
};