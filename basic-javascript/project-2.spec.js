const {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
} = require("./project-2");

describe("funcs library", () => {
  describe(".getBiggest() method", () => {
    test("should take in two numbers, compares them, returns the biggest, or one of the numbers if equal", () => {
      expect(getBiggest(1, 2)).toBe(2);
    });
  });
  describe(".greeting() method", () => {
    it("responds with a greeding in the inputted language when invoked", () => {
      expect(greeting("German")).toBe("Guten Tag!");
    });
  });
  describe(".isTenOrFive() method", () => {
    it("returns true if number is 5 or 10 or false otherwise", () => {
      expect(isTenOrFive(10)).toBe(true);
      expect(isTenOrFive(9)).toBe(false);
    });
  });
  describe(".isInRange() method", () => {
    it("returns true if number is less than 50 and greater than 20 and false otherwise", () => {
      expect(isInRange(45)).toBe(true);
      expect(isInRange(179807)).toBe(false);
    });
  });
  describe(".isInteger() method", () => {
    it("should check if the inputted number is a floating number or not", () => {
      expect(isInteger(50.402)).toBe(false);
    });
  });
  describe(".fizzBuzz() method", () => {
    it("should return fizzbuzz if divisible by 15, buzz if divisible by 5, fizz if divisible by 3, and the number otherwise", () => {
      expect(fizzBuzz(15)).toBe("fizzbuzz");
      expect(fizzBuzz(3)).toBe("fizz");
      expect(fizzBuzz(4)).toBe(4);
    });
  });
  describe(".isPrime() method", () => {
    it("should return true if prime and false otherwise", () => {
      expect(isPrime(15)).toBe(false);
      expect(isPrime(5)).toBe(true);
    });
  });
  describe(".returnFirst() method", () => {
    it("should return the first item in the array", () => {
      expect(returnFirst([6, 3, 5, 10])).toEqual(6);
    });
  });
  describe(".returnLast() method", () => {
    it("should return the last item in an array", () => {
      expect(returnLast([6, 3, 5, 10])).toEqual(10);
    });
  });
  describe(".getArrayLength() method", () => {
    it("should return the length of the inputted array", () => {
      expect(getArrayLength([6, 3, 5, 10])).toBe(4);
    });
  });
  describe(".incrementByOne() method", () => {
    it("should return an array with each item incremented by one", () => {
      expect(incrementByOne([6, 3, 5, 10])).toEqual([7, 4, 6, 11]);
    });
  });
  describe(".addItemToArray() method", () => {
    it("should push a new item to the end of an array", () => {
      expect(addItemToArray([6, 3, 5, 10], 9)).toEqual([6, 3, 5, 10, 9]);
    });
  });
  describe(".addItemToFront() method", () => {
    it("should add a new item to the front of an array", () => {
      expect(addItemToFront([6, 3, 5, 10], 10)).toEqual([10, 6, 3, 5, 10]);
    });
  });
});
