const convertToCelsius = function (f) {
  let celsius = (5 / 9) * (f - 32);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (c) {
  let fah = c * (9 / 5) + 32;
  return Math.round(fah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
