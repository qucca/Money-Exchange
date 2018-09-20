// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange"
    }
    else if (currency > 0) {
        result.H = Math.floor(currency/50);
        currency = currency % 50;
        result.Q = Math.floor(currency/25);
        currency = currency % 25;
        result.D = Math.floor(currency/10);
        currency = currency % 10;
        result.N = Math.floor(currency/5);
        currency = currency % 5;
        result.P = currency;
    }
    Object.keys(result).forEach((key) => (result[key] === 0) && delete result[key]);
    return result;

};
