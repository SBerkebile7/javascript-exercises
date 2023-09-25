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
	let nPower = x;

  for(let i = 1; i < y; i++) {
    nPower = nPower * x;
  }

  return nPower;
};

const factorial = function(x) {
	let factProd = x;
  console.log(factProd);

  if(x > 0) {
    for(let i = x; i > 1; i--) {
      x--;
      factProd = factProd * (x);
      console.log(x);
      console.log(factProd);
    }
  
    return factProd;
  } 
  else {
    factProd = 1;
    return factProd;
  }
  
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
