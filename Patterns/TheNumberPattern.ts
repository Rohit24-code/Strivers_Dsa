// Problem Statement: Given an integer N, print the following pattern :

// Here, N = 4.

// Examples:

// Input Format: N = 3
// Result:
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

// Input Format: N = 6
// Result:
// 6 6 6 6 6 6 6 6 6 6 6
// 6 5 5 5 5 5 5 5 5 5 6
// 6 5 4 4 4 4 4 4 4 5 6
// 6 5 4 3 3 3 3 3 4 5 6
// 6 5 4 3 2 2 2 3 4 5 6
// 6 5 4 3 2 1 2 3 4 5 6
// 6 5 4 3 2 2 2 3 4 5 6
// 6 5 4 3 3 3 3 3 4 5 6
// 6 5 4 4 4 4 4 4 4 5 6
// 6 5 5 5 5 5 5 5 5 5 6
// 6 6 6 6 6 6 6 6 6 6 6
// Solution
// Disclaimer: Don't jump directly to the solution, try it out yourself first.

// Problem Link

// Approach:

// There are 4 general rules for solving a pattern-based question :

// We always use nested loops for printing the patterns. For the outer loop, we count the number of lines/rows and loop for them.
// Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
// We print the numbers inside the inner loop.
// Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns or not.
// This problem is not generally asked in the interviews but it is good to practice such problems for the sake of logic building. So, what we can observe from the above examples is that on the perimeter of the square, there is an integer no. N which decreases by 1 as we move inside the square level-wise. Since this cannot be printed directly, we print it in reverse fashion (0’s at the border of the square, then 1 in the inner perimeter, then 2, and so on ) and then subtract the whole pattern by N at the end which just makes the outermost perimeter filled with the number N, inner perimeter with N-1 and finally the centermost element with the integer 1. The outer and the inner loop will run for the same number of times ( since we have to print square) i.e, 2*N-1 times and the inner loop would print the numbers based on the logic as described below ( for N = 4 ):

// Not able to think in this way

function squarePattern(num: number) {
  let size = 2 * num - 1;

  for (let i = 0; i < size; i++) {
    let ans = "";
    for (let j = 0; j < size; j++) {
      const minDist = Math.min(i, j, size - 1 - i, size - 1 - j);
      const value = num - minDist;
      ans += value;
    }
    console.log(ans);
  }
}

squarePattern(3);
