/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const map = new Map();

    key.split('').forEach(letter => {
        if (letter === ' ') return;
        
        if (!map.has(letter)) {
            map.set(letter, abc[map.size]);
        }
    });

    return message.split('').map(letter => map.get(letter) || letter).join('');
};