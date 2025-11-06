/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    const result = [];

    const handle = (prev, str) => {
        if (str.length === n) {
            result.push(str);
            return;
        }

        str = '1' + str;
        handle(1, str);
        str = str.slice(1);
        
        if (prev === 1) {
            str = '0' + str;
            handle(0, str);
            str = str.slice(1);
        }
    }

    handle(0, '0');
    handle(1, '1');

    return result;
};