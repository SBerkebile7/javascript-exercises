const sumAll = function(min, max) {
    if(min > max){
        const tempMax = min;
        min =  max;
        max = tempMax;
    }

    if(min < 0 || max < 0){ 
        return "ERROR";
    }

    let sum = 0;

    for(let i = min; i <= max; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
