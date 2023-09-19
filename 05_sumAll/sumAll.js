const sumAll = function(num1, num2) {
    let sum = 0;

    if(num1 < num2) {
        for(let i = 1; i <= num2; i++) {
            sum = i + sum;
        }
    } else if(num1 > num2) {
        for(let i = 1; i <= num1; i++) {
            sum = i + sum;
        }
    } else {
        return 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
