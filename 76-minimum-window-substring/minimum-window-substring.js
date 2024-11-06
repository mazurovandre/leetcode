/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const tMap = new Map();
    const sMap = new Map();
    let left = 0;
    let have = 0;
    let need = 0;
    let isMatch = false;
    let result = s;

    for (const char of t) {
        const count = tMap.get(char) || 0;

        tMap.set(char, count + 1);
    }

    need = tMap.size;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const countS = (sMap.get(s[i]) || 0) + 1;
        const countT = tMap.get(s[i]) || 0;

        sMap.set(char, countS);

        if (countS === countT && countT) {
            have++;
        }

        while (have === need) {
            const slice = s.slice(left, i + 1);

            if (slice.length <= result.length) {
                isMatch = true;
                result = slice;
            }
            
            let leftChar = s[left];
            let countLeft = sMap.get(leftChar) || 0;
            const countRight = tMap.get(leftChar) || 0;
            
            sMap.set(leftChar, countLeft - 1);

            if (countLeft - 1 < countRight && countRight) {
                --have;
            }
            
            ++left;
        }
    }

    return isMatch ? result : '';
};