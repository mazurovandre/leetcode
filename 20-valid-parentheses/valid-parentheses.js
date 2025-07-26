/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const dict = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let bracket of s) {
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
            continue;
        }

        if (stack[stack.length - 1] === dict[bracket]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};