const leapYears = function(year) {
    const yearDivFour = year % 4 === 0;
    const yearNotCentury = year % 100 === 0;
    const yearFourHundred = year % 400 === 0;

    if (yearDivFour && (!yearNotCentury || yearFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
