/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = new Map();
    const result = [];

    groupSizes.forEach((size, index) => {
        if (map.has(size)) {
            const arr = map.get(size);
            map.set(size, [...arr, index]);
        } else {
            map.set(size, [index]);
        }
    });

    map.forEach((arr, size) => {
        while (arr.length) {
            result.push(arr.slice(0, size));
            arr = arr.slice(size);
        }
    })

    return result;
};