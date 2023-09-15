const reverseString = function(word) {
    var splitString = word.split("");

    var reverseString = splitString.reverse();

    var joinString = reverseString.join("");

    return joinString;
};

// Do not edit below this line
module.exports = reverseString;
