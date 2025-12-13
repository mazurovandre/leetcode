/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const valids = {
        'electronics': [],
        'grocery': [],
        'pharmacy': [],
        'restaurant': [],
    };

    for (let i = 0; i < code.length; i++) {
        if (!isActive[i]) continue;
        if (!/^[a-zA-Z0-9_]+$/.test(code[i])) continue;
        if (!Array.isArray(valids[businessLine[i]])) continue;

        valids[businessLine[i]].push(code[i]);
    }

    return [
        ...valids.electronics.sort(), 
        ...valids.grocery.sort(), 
        ...valids.pharmacy.sort(), 
        ...valids.restaurant.sort()
    ];
};