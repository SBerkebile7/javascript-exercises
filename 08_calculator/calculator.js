const add = function(x, y) {
	let sum = x + y;

  return sum;
};

const subtract = function(x, y) {
  let difference = x - y;

  return difference;
};

const sum = function(x) {
  let sum = 0;

  for(let i = 0; i < x.length; i++) {
    sum = sum + x[i];
  }

  return sum;
};

const multiply = function(x) {
  let product = 1;

  for(let i = 0; i < x.length; i++) {
    product = product * x[i];
  }

  return product;
};

const power = function(x, y) {
	let nPower = x^y;
};

const factorial = function(x) {
	let sum = x;
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
