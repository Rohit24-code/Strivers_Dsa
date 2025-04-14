// You are given an integer n. You need to find all the divisors of n. Return all the divisors of n as an array or list in a sorted order.

// A number which completely divides another number is called it's divisor.

// Examples:
// Input: n = 6

// Output = [1, 2, 3, 6]

// Explanation: The divisors of 6 are 1, 2, 3, 6.

// Input: n = 8

// Output: [1, 2, 4, 8]

// Explanation: The divisors of 8 are 1, 2, 4, 8.

// This is brute force way o(N)
const PrintAllDivisors = (num: number) => {
  let ans = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      ans.push(i);
    }
  }
  return ans;
};

let allDivisorAns = PrintAllDivisors(36);
console.log(allDivisorAns, "allDivisorAns");

// Optimised way (Efficient Divisor Enumeration using Square Root Trick)

const optimisedPrintAllDivisors = (num: number) => {
  let ans = [];

  //    (i * i <= num ) :- this is similar to i<=Math.sqrt(num)
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      ans.push(i);
      if (i != num / i) {
        //This to handle edge case like with 36 we will have same num twice like 6.
        ans.push(num / i);
      }
    }
  }
  return ans?.sort((a, b) => a - b);
};

let allOptimisedDivisorAns = optimisedPrintAllDivisors(36);
console.log(allOptimisedDivisorAns, "allOptimisedDivisorAns");
