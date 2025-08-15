const removeFromArray = function(arr, ...values) {
    //convert values to array
    valuesToRemove = Array.from(values);

    // filter the values out of the array
    //valuesToRemove will check if item is in there and then, if true it would be included in the array
    // if false it would be excluded from the array
    // I need to swap the logic to exclude the items with '!'
    const filteredArray = arr.filter(item => !valuesToRemove.includes(item));

    // return new array
    return filteredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
