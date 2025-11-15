const convertToCelsius = function(tempF) {
  convTempC = (tempF - 32) / (9/5);

  console.log(convTempC);

  let finalTempC = parseFloat(convTempC.toFixed(1)); 

  return finalTempC;
};

const convertToFahrenheit = function(tempC) {
  convTempF = tempC * (9/5) + 32;

  let finalTempF = parseFloat(convTempF.toFixed(1)); 

  return finalTempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
