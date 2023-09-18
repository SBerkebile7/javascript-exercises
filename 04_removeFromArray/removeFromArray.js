const removeFromArray = function(x, y) {
    let fullArray = x;
    
    let removeItem = fullArray.indexOf(y);

    fullArray.splice(removeItem, 1);

    console.log(fullArray);

    return fullArray;
};

// Do not edit below this line
module.exports = removeFromArray;
