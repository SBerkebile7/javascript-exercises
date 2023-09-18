const removeFromArray = function(x, y) {
    let fullArray = x;
    
    //let removeItem = fullArray.indexOf(y);


    for(let i = 1; i < arguments.length; i++) {
        let removeItem = fullArray.indexOf(arguments[i]);

        fullArray.splice(removeItem, 1);
    }

    console.log(fullArray);
    console.log(y);

    return fullArray;
};

// Do not edit below this line
module.exports = removeFromArray;
