
module.exports = function reverse (n) {
    strReverse = Math.abs(n).toString().split('').reverse().join('');
    return strReverse;
}