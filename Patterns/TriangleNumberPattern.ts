// Problem Statement: Given an integer N, print the following pattern : 


// Here, N = 5.

// Examples:

// Input Format: N = 3
// Result: 
// 1
// 1 2 
// 1 2 3

// Input Format: N = 6
// Result:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// Solution
// Disclaimer: Don't jump directly to the solution, try it out yourself first.

// Problem Link

// Approach: 

// There are 4 general rules for solving a pattern-based question : 

// We always use nested loops for printing the patterns. For the outer loop, we count the number of lines/rows and loop for them.
// Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
// We print the ‘*’ inside the inner loop.
// Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns or not.
// In this pattern, we run the outer loop for N times as we have to print N rows, and since we have to print a right-angled triangle/pyramid which must be upright, so the inner loop will run for the row number in each iteration. For eg: 1 number for row 1, 5 numbers for row 5, and so on. The only difference between this pattern and pattern 2 is that here we print numbers looping from 1 to the row number for each row instead of printing stars.

function trinagleNumberPattern(N:number){
  for(let i=0;i<N;i++){
    let ans=""
    for(let j=0;j<=i;j++){
        ans+=(i+1)+" "
    }

    console.log(ans)
  }
}

trinagleNumberPattern(50)