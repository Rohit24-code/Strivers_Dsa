// Given two integers a and b, the task is to compute their LCM and GCD and return an array containing their LCM and GCD.

// Examples:

// Input: a = 5 , b = 10
// Output: [10, 5]
// Explanation: LCM of 5 and 10 is 10, while their GCD is 5.
// Input: a = 14 , b = 8
// Output: [56, 2]
// Explanation: LCM of 14 and 8 is 56, while their GCD is 2.
// Input: a = 1 , b = 1
// Output: [1, 1]
// Explanation: LCM of 1 and 1 is 1, while their GCD is 1.
// Constraints:
// 1 <= a, b <= 109

// Absolutely! Let's break down the Euclidean Algorithm and your comment line by line with simple examples and intuition.

// 📌 The Goal:
// To find the GCD (Greatest Common Divisor) of two numbers a and b.

// 📚 The Rule (Euclidean Algorithm):
// The algorithm is based on the principle:

// gcd(a, b) = gcd(a - b, b) (as long as a > b)

// But a more optimized version (used in most implementations) is:

// gcd(a, b) = gcd(b, a % b)

// This repeats until b === 0, and then the GCD is a.

// 🤓 Intuition Behind gcd(a, b) = gcd(a - b, b):
// The idea is:
// Subtracting the smaller number from the larger number does not change the GCD.

// Example:
// Let’s take gcd(20, 15):

// cpp
// Copy
// Edit
// gcd(20, 15)
// = gcd(20 - 15, 15)     // a > b
// = gcd(5, 15)
// = gcd(15 - 5, 5)
// = gcd(10, 5)
// = gcd(10 - 5, 5)
// = gcd(5, 5)
// = gcd(5 - 5, 5)
// = gcd(0, 5)
// = 5 ✅
// You subtract repeatedly until one becomes 0, and the other one is your GCD.

// 🧠 Why is this true?
// Let’s say:

// d divides both a and b ⇒ then d also divides a - b.

// That’s the core mathematical fact the algorithm is built on.

// ✅ More Optimized Version (With Modulo):
// ts
// Copy
// Edit
// const gcd = (a: number, b: number): number => {
//   if (b === 0) return a;
//   return gcd(b, a % b);
// };

// console.log(gcd(20, 15)); // Output: 5
// This is faster and used in real-world code because:

// a % b can reduce the numbers more quickly than just subtracting.



function getLcmAndGcd(a: number, b: number) {
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a
  }

  if (a === 0) return b
  return a
}

let agetLcmAns = getLcmAndGcd(10, 5);
console.log(agetLcmAns, "agetLcmAns");
