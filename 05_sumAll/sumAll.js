const sumAll = function(num1, num2) {
    let sum = 0;

    if(num1 > 0 && num2 > 0) {
        if(Number.isInteger(num1) && Number.isInteger(num2)) {
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
        } else {
            return 'ERROR';
        }
    }  else {
        return 'ERROR';
    }
    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
