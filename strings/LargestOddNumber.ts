// Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.

// The number returned should not have leading zero's. But the given input string may have leading zero. (If no odd number is found, then return empty string.)

// Example 1

// Input : s = "5347"

// Output : "5347"

// Explanation :

// The odd numbers formed by given strings are --> 5, 3, 53, 347, 5347.

// So the largest among all the possible odd numbers for given string is 5347.

// Example 2

// Input : s = "0214638"

// Output : "21463"

// Explanation :

// The different odd numbers that can be formed by the given string are --> 1, 3, 21, 63, 463, 1463, 21463.

// We cannot include 021463 as the number contains leading zero.

// So largest odd number in given string is 21463.

// export function LargestOddNumber(str: string) {
//   console.log(str.length, "length");
//   let ans = 0;
//   for (let i = 0; i < str.length; i++) {
//     let comb = str[i];
//     for (let j = i + 1; j < str.length; j++) {
//       if (+comb % 2 != 0 && +comb > ans) {
//         ans = +comb;
//       }
//       comb += str[j];
//       if (+comb % 2 != 0 && +comb > ans) {
//         ans = +comb;
//       }
//     }
//   }

//   return ans;
// }

export const LargestOddNumber = (str: string) => {
  let ans = "";
  let start = 0;
  let end = -1;

  for (let i = 0; i < str.length; i++) {
    if (+str[i] != 0) {
      start = i;
      break;
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (+str[i] % 2 != 0) {
      end = i;
      break;
    }
  }

  if (end === -1) return "";
  console.log(start, end);
  for (let i = start; i <= end; i++) {
    ans += str[i];
  }

  return ans;
};
let ans = LargestOddNumber("0002146346");
console.log(ans, "ans");
