const repeatString = function(x, y) {

    let sayHey = "";
    let loopAmount = y;

    if(loopAmount > 0){
        for(let i = 0; i < loopAmount; i++) {
            sayHey = sayHey + x;
        }
    }
    else if(loopAmount < 0) {
        return "ERROR"
    }
    else {
      return sayHey  
    }

    

    return sayHey;
};

// Do not edit below this line
module.exports = repeatString;
