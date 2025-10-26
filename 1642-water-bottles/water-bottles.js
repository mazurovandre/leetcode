/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let result = 0;
    let fullBottles = numBottles;
    let emptyBottles = 0;

    while (fullBottles || Math.floor(emptyBottles / numExchange)) {
        result += fullBottles;
        emptyBottles += fullBottles;
        fullBottles = Math.floor(emptyBottles / numExchange);
        emptyBottles = emptyBottles % numExchange;
    }

    return result;
};