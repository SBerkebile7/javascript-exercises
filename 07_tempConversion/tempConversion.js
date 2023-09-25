const convertToCelsius = function(temp) {
  // (x − 32) * 5/9

  let celConvert = (temp - 32) * (5/9)

  console.log(celConvert);

  celConvert = Math.round(celConvert * 10) / 10;

  return celConvert;
};

const convertToFahrenheit = function(temp) {
  // (x * 9/5 + 32)

  let fahrConvert = (temp * (9/5) + 32);

  console.log(fahrConvert);

  fahrConvert = Math.round(fahrConvert * 10) / 10;

  console.log(fahrConvert);

  return fahrConvert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
