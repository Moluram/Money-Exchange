// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let feedBack = {}
    let coins = {
        H : 50, Q : 25, D : 10, N : 5, P : 1
    }

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    while (currency >= 1) {
        let number = 0;
        for (key in coins) {
            if (currency >= coins[key]) {
                number = Math.floor(currency / coins[key]);
                currency -= coins[key] * number;
                feedBack[key] = number;
            }
        }
    }

    return feedBack;
}
