const leapYears = function(year) {

    if (year % 4 === 0) {
        //divisible 100 false
        if (year % 100 === 0) {
            //divisible 400 true
            if (year % 400 === 0) {
                return true; // Century year divisible by 400 is a leap year
            } else {
                return false; // Century year not divisible by 400 is not a leap year
            }
        } else {
            return true; // Non-century year divisible by 4 is a leap year
        }
    }
    return false; // All other years are not leap years
};

// Do not edit below this line
module.exports = leapYears;
