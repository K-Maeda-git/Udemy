const toFizzBuzz = require("./fizzbuzz");

test("fizzbuzzのユニットテスト", () => {
  expect(() => toFizzBuzz("test")).toThrow(RangeError);

  expect(() => toFizzBuzz(-1)).toThrow(RangeError);
  expect(() => toFizzBuzz(0)).toThrow(RangeError);

  expect(toFizzBuzz(1)).toBe(1);
  expect(toFizzBuzz(3)).toBe("Fizz");
  expect(toFizzBuzz(5)).toBe("Buzz");
  expect(toFizzBuzz(15)).toBe("FizzBuzz");
});
