/**
 *
 * @param number1: {Number}
 * @param number2: {Number}
 * @param number3: {Number}
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    const min = Math.min(number1,number2,number3);
    return min;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    if(x % 2 == 0 && y % 2 == 0 && z % 2 == 0)
    {
        return 'even'; 
    }
    if(x % 2 == 1 && y % 2 == 1 && z % 2 == 1)
    {
        return 'odd'; 
    }
    else
    {
        return 'even/odd'
    }
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    if(z>=x && z<=y){
        return 'In range'
    }
    else{
        return 'Out of range'
    }
};
