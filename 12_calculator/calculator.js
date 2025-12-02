const add = function(x, y) {
	 return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((x, y) => x + y, 0)
};

const multiply = function(array) {
  return array.reduce((x, y) => x * y)
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
	let factor = 1;
  for(let i = n; i > 0; i--) {
    factor *= i;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
