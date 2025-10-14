/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1;
    const arr = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    while(left < right) {
        const isLeftVowel = vowels.includes(s[left].toLowerCase());
        const isRightVowel = vowels.includes(s[right].toLowerCase());

        if (!isLeftVowel) {
            left++;
            continue;
        }

        if (!isRightVowel) {
            right--;
            continue;
        }

        if (isLeftVowel && isRightVowel) {
            const leftVowel = s[left];
            const rightVowel = s[right];

            arr[left] = rightVowel;
            arr[right] = leftVowel;

            left++;
            right--;
        }
    }

    return arr.join('');
};