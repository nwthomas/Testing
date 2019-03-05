/* eslint-disable arrow-parens */

module.exports = {
  multiplyByTen(num) {
    return num * 10;
  },
  subtractFive(num) {
    return num - 5;
  },
  areSameLength(str1, str2) {
    return str1.length === str2.length;
  },
  areEqual(x, y) {
    return x === y;
  },
  lessThanNinety(num) {
    if (num < 90) {
      return true;
    }
    return false;
  },
  greaterThanFifty(num) {
    if (num > 50) {
      return true;
    }
    return false;
  },
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  divide(x, y) {
    return x / y;
  },
  multiply(x, y) {
    return x * y;
  },
  getRemainder(x, y) {
    return x % y;
  },
  isEven(num) {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  },
  isOdd(num) {
    if (num % 2 === 0) {
      return false;
    }
    return true;
  },
  square(num) {
    return num * num;
  },
  cube(num) {
    return num * num * num;
  },
  raiseToPower(num, exponent) {
    return num ** exponent;
  },
  roundNumber(num) {
    return Math.round(num);
  },
  roundUp(num) {
    return Math.ceil(num);
  },
  addExclamationPoint(str) {
    return (str += "!");
  },
  combineNames(firstName, lastName) {
    return `${firstName} ${lastName}`;
  },
  getGreeting(name) {
    return `Hello ${name}!`;
  },
  getRectangleArea(length, width) {
    return length * width;
  },
  getTriangleArea(base, height) {
    return 0.5 * base * height;
  },
  getCircleArea(radius) {
    return Math.PI * radius * radius;
  },
  getRectangularPrismVolume(length, width, height) {
    return width * height * length;
  }
};
