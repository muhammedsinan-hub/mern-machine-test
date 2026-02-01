function isPalindromeNumber(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversedHalf = 0;
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

// Normal console tests
console.log("121 →", isPalindromeNumber(121));
console.log("1221 →", isPalindromeNumber(1221));
console.log("-121 →", isPalindromeNumber(-121));
console.log("123 →", isPalindromeNumber(123));
console.log("10 →", isPalindromeNumber(10));
console.log("7 →", isPalindromeNumber(7));

module.exports = isPalindromeNumber;