const fibonacci = function(fib) {
    let n
    if(typeof fib !== 'number') {
        n = parseInt(fib);
    } else {
        n = fib;
    }
    

    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1) return 1;

    let x = 1;
    let y = 0;

    for(let i = 2; i <= n; i++) {
        let temp = x + y;
        y = x;
        x = temp;
    };
    return x;
};

// Do not edit below this line
module.exports = fibonacci;
