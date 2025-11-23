/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const set = new Set(...[edges[0]]);

    for (let i = 1; i < edges.length; i++) {
        const [x, y] = edges[i];
        const hasX = set.has(x);
        const hasY = set.has(y);

        if (!hasX && hasY) {
            return y;
        }

        if (hasX && !hasY) {
            return x;
        }
    }

    return edges[0][0];
};