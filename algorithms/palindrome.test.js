const isPalindromeNumber = require("./palindrome");

test("Palindrome number (odd digits)", () => {
  expect(isPalindromeNumber(121)).toBe(true);
});

test("Palindrome number (even digits)", () => {
  expect(isPalindromeNumber(1221)).toBe(true);
});

test("Negative number is not palindrome", () => {
  expect(isPalindromeNumber(-121)).toBe(false);
});

test("Non-palindrome number", () => {
  expect(isPalindromeNumber(123)).toBe(false);
});

test("Number ending with zero is not palindrome", () => {
  expect(isPalindromeNumber(10)).toBe(false);
});

test("Single digit number", () => {
  expect(isPalindromeNumber(7)).toBe(true);
});