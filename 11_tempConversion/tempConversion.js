const convertToCelsius = function() {
  // Convert Fahrenheit to Celsius
  return (fahrenheit) => {
    return parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(1));
  };
};

const convertToFahrenheit = function() {
  // Convert Celsius to Fahrenheit
  return (celsius) => {
    return parseFloat(((celsius * 9 / 5) + 32).toFixed(1));
  };
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
