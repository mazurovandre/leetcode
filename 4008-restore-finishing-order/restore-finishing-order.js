/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const set = new Set(friends);

    return order.filter(friend => set.has(friend));
};