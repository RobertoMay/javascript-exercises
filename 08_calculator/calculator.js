const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function (array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

};

const power = function (a, b) {
  const aux = a;
  for (let i = 1; i < b; i++) {
    a *= aux;
  }
  return a;
};

const factorial = function (a) {
  if (a === 0 || a === 1) {
    return 1;
  } else {
    const size = a-1;
    let factorial = a;
    for (let i = 0; i < size; i++) {
      a--;
      factorial = factorial * a;

    }
    return factorial;
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
