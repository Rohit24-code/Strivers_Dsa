// Problem statement
// Sam is planting trees on the upper half region (separated by the left diagonal) of the square shared field.

// For every value of ‘N’, print the field if the trees are represented by ‘*’.

// Example:
// Input: ‘N’ = 3

// Output:
// * * *
// * *
// *
// Detailed explanation ( Input/output format, Notes, Images )
// Constraints :
// 1  <= T <= 10
// 1  <= N <= 25
// Time Limit: 1 sec
// Sample Input 1:
// 3
// Sample Output 1:
// * * *
// * *
// *
// Sample Input 2 :
// 1
// Sample Output 2 :
// *
// Sample Input 3 :
// 4
// Sample Output 3 :
// * * * *
// * * *
// * *
// *

function UpperTree(N: number) {
  for (let i = 0; i < N; i++) {
    let ans = "";
    for (let j = 0; j < N - i; j++) {
      ans += "* ";
    }
    console.log(ans);
  }
}

UpperTree(5);
