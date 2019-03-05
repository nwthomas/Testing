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
  describe(".isEven() method", () => {
    it("takes in a number and returns true if even and false if odd", () => {
      expect(isEven(100)).toBe(true);
      expect(isEven(99)).toBe(false);
    });
  });
  describe(".isOdd() method", () => {
    it("takes in a number and returns true if odd and false if even", () => {
      expect(isOdd(100)).toBe(false);
      expect(isOdd(99)).toBe(true);
    });
  });
  describe(".square() method", () => {
    it("takes in a number and returns its square", () => {
      expect(square(4)).toBe(16);
      expect(square(10)).toBe(100);
    });
  });
  describe(".cube() method", () => {
    it("takes in a number and returns its cube", () => {
      expect(cube(5)).toBe(125);
      expect(cube(10)).toBe(1000);
      expect(cube(2)).toBe(8);
    });
  });
  describe(".raiseToPower()", () => {
    it("takes in a number and exponent and raises the number to the poewr of the exponent", () => {
      expect(raiseToPower(2, 2)).toBe(4);
      expect(raiseToPower(5, 3)).toBe(125);
    });
  });
  describe(".roundNumber() method", () => {
    it("rounds down any floating point number input into it", () => {
      expect(roundNumber(99.9)).toBe(100);
      expect(roundNumber(59.791)).toBe(60);
    });
  });
  describe(".roundUp() method", () => {
    it("rounds up any floating point number put into it", () => {
      expect(roundUp(4.11111)).toBe(5);
    });
  });
  describe(".addExclamationPoint() method", () => {
    it("takes in a string and returns it with an exclamation point on the end", () => {
      expect(addExclamationPoint("Dude")).toBe("Dude!");
    });
  });
  describe(".combineNames() method", () => {
    it("take in two string names and concatenates them together", () => {
      expect(combineNames("Nathan", "Thomas")).toBe("Nathan Thomas");
    });
  });
  describe(".getGreeting() method", () => {
    it("takes in a string name and returns in a greeting", () => {
      expect(getGreeting("Nathan")).toBe("Hello Nathan!");
    });
  });
  describe(".getRectangleArea() method", () => {
    it("takes in a length and width and returns the area of a rectangle", () => {
      expect(getRectangleArea(10, 3)).toBe(30);
      expect(getRectangleArea(50, 2)).toBe(100);
    });
  });
  describe(".getTriangleArea() method", () => {
    it("takes in a base and a height and returns the triangle's area", () => {
      expect(getTriangleArea(20, 10)).toBe(100);
    });
  });
  describe(".getCircleArea() method", () => {
    it("takes in a radius and returns the circle's circumference", () => {
      expect(getCircleArea(10)).toBe(314.1592653589793);
    });
  });
  describe(".getRectangularPrismVolume", () => {
    it("takes in a length, width, and height, and returns the volume of a prism", () => {
      expect(getRectangularPrismVolume(10, 10, 10)).toBe(1000);
    });
  });
});
