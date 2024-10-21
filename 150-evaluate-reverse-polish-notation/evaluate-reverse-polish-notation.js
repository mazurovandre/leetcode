/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

        tokens.forEach(token => {
            const value = parseInt(token);
            const second = !isNaN(value) ? 0 : stack.pop();
            const first = !isNaN(value) ? 0 : stack.pop();

            switch (token) {
                case '+':
                    stack.push(first + second);
                    break;
                case '-':
                    stack.push(first - second);
                    break;
                case '*':
                    stack.push(first * second);
                    break;
                case '/':
                    stack.push(Math.trunc(first / second));
                    break;
                default:
                    stack.push(+token);
                    break;
            }
        });

        return stack[stack.length - 1];
};