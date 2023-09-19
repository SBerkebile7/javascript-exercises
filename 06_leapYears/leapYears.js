const leapYears = function(year) {
    let isLeapYear = true;
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ) {
        isLeapYear = true;
    }
    else {
        isLeapYear = false;
    }

    console.log("year % 4 == 0 actually equals = " + year % 4)
    console.log("year % 100 != 0 actually equals = " + year % 100)
    console.log("year % 400 == 0 actually equals = " + year % 400)

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
