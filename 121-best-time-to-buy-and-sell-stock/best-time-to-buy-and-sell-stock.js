/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let buy = prices[0];

    for (let sell of prices) {
        const profit = sell - buy;

        result = Math.max(result, profit);
        buy = Math.min(buy, sell);
    }

    return result;
};