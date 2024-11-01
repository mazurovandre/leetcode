
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, []);
    }

    this.map.get(key).push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const values = this.map.get(key) || [];
    let result = '';
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        
        if (values[middle][0] <= timestamp) {
            result = values[middle][1];
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */