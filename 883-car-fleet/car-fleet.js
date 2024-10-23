/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let maxTime = 0;
    const fleets = [];
    const cars = position
        .map((_, i) => ([position[i], speed[i], (target - position[i]) / speed[i]]))
        .sort((a, b) => a[0] - b[0]);

    for (let i = cars.length - 1; i >= 0; i--) {
        const currentTime = cars[i][2];

        if (currentTime > maxTime) {
            fleets.push(currentTime);
            maxTime = currentTime;
        } else {
            maxTime = Math.max(currentTime, maxTime);
        }
    }

    return fleets.length;
};