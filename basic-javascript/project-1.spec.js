const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require("./project-1");

describe("helpers library", () => {
  describe(".multiplyByTen() method", () => {
    it("multiplied any input number by 10", () => {
      expect(multiplyByTen(5)).toBe(50);
    });
  });
  describe(".subtractFive() method", () => {
    it("subtracts five from any number input into it", () => {
      expect(subtractFive(50)).toBe(45);
    });
  });
  describe(".areSameLength() method", () => {
    it("returns true if two strings are the same length or false otherwise", () => {
      expect(areSameLength("dude", "four")).toBe(true);
      expect(areSameLength("dude", "ha")).toBe(false);
    });
  });
  describe(".areEqual() method", () => {
    it("returns true if two inputs are equal and false otherwise", () => {
      expect(areEqual(4, 6)).toBe(false);
      expect(areEqual(true, true)).toBe(true);
      expect(areEqual("string", "dude")).toBe(false);
    });
  });
  describe(".lessThanNinety() method", () => {
    it("returns true if input number is less than 90 and false otherwise", () => {
      expect(lessThanNinety(89)).toBe(true);
      expect(lessThanNinety(91)).toBe(false);
      expect(lessThanNinety(90)).toBe(false);
    });
  });
  describe(".greaterThanFifty() method", () => {
    it("returns true if input number is greater than 50 and false otherwise", () => {
      expect(greaterThanFifty(49)).toBe;
      expect(greaterThanFifty(51)).toBe(true);
      expect(greaterThanFifty(50)).toBe(false);
    });
  });
  describe(".add() method", () => {
    it("adds two numbers together and returns them", () => {
      expect(add(3, 4)).toBe(7);
    });
  });
  describe(".subtract() method", () => {
    it("subtracts x from y and returns the result", () => {
      expect(subtract(3, 2)).toBe(1);
    });
  });
  describe(".divide() method", () => {
    it("divides x by y and returns the result", () => {
      expect(divide(50, 5)).toBe(10);
    });
  });
  describe(".multiply() method", () => {
    it("multiplies two numbers together and returns the total", () => {
      expect(multiply(5, 10)).toBe(50);
    });
  });
  describe(".getRemainder() method", () => {
    it("divides x by y and returns any remainder", () => {
      expect(getRemainder(50, 5)).toBe(0);
      expect(getRemainder(50, 3)).toBe(2);
    });
  });
  describe(".isEven() method", () => {});
});
