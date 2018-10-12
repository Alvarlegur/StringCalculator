//stringCalculator.test.js

//1.2
const string_calculator = require('./StringCalculator.js')

test("Empty string returns zero", () => {
  expect(string_calculator.Add("")).toBe(0);
});
