//stringCalculator.test.js

//1.2
const string_calculator = require('./StringCalculator.js')

test("Empty string returns zero", () => {
  expect(string_calculator.Add("")).toBe(0);
});

test("one number in parameter", () => {
  expect(string_calculator.Add("4")).toBe(4);
});

test("Two numbers in parameter", () => {
  expect(string_calculator.Add("5,9")).toBe(14);
});

test("Unknown number of arguments in parameter", () => {
  expect(string_calculator.Add("5,9,10,23,16")).toBe(63);
});

test("New lines between numbers in parameter", () => {
  expect(string_calculator.Add("5\n2,6")).toBe(13);
});

test("Negative number in parameter", () => {
  expect(string_calculator.Add("-1,4")).toBe("Negatives not allowed: -1");
});

test("Numbers bigger than 1000", () => {
  expect(string_calculator.Add("1003,4")).toBe(4);
});
