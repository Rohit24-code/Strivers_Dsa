// 7. Reverse Integer
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

// Accepted
// 3.9M
// Submissions
// 13.1M
// Acceptance Rate
// 30.0%

const reverseNumber = (num: number) => {
  let ans = 0;

  let isNegative = num < 0;
  let absNum = Math.abs(num);
  while (absNum >= 1) {
    let newNum = absNum % 10;
    ans = ans * 10 + newNum;
    absNum = Math.floor(absNum / 10);
  }

  const INT_MIN = -(2 ** 31); // -2147483648
  const INT_MAX = 2 ** 31 - 1; // 2147483647

  if (ans < INT_MIN || ans > INT_MAX) {
    return 0;
  }

  return isNegative ? ans * -1 : ans;
};

let final = reverseNumber(-123);
console.log(final, "final");
