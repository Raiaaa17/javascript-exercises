const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let res = 0;
  for (let i of a) {
    res += i;
  }
  return res;
};

const multiply = function(a) {
  if (a.length === 0){
    return 0;
  };
  let res = 1;
	for (let i of a) {
    res *= i;
  }
  return res;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) return 1;
	return a * factorial(a-1);
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
