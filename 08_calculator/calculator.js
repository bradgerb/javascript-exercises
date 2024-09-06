const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(input) {
  return input.reduce((sum, current) => sum + current, 0)
};

const multiply = function(input) {
  return input.reduce((total, current) => total * current, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
  let total = 1;
	for (let i = num; i >= 1; i--){
    total = i * total
  };
  return total
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
