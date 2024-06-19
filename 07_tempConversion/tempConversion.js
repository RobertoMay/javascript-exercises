const convertToCelsius = function(numFarenheit) {
  return Number(((numFarenheit -= 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(numCelcius) {
  return Number(((numCelcius * (9/5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
