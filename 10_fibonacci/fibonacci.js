const fibonacci = function(n) {
    const input = parseInt(n, 10);
    let a = 0, b = 1, temp = 0;

    if (input < 0) {
        return "OOPS"
    } else {
        for (let i = 2; i <= input; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return input === 0 ? a : b;
    }

};

// Do not edit below this line
module.exports = fibonacci;
