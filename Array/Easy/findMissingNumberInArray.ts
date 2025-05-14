// Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

// Examples

// Example 1:
// Input Format: N = 5, array[] = {1,2,4,5}
// Result: 3
// Explanation: In the given array, number 3 is missing. So, 3 is the answer.

// Example 2:
// Input Format: N = 3, array[] = {1,3}
// Result: 2
// Explanation: In the given array, number 2 is missing. So, 2 is the answer.

const findMissingNumberInArray = (arr: number[], n: number) => {

    let newArr = arr?.sort((a, b) => a - b)

    for (let i = 0; i < newArr?.length - 1; i++) {
        if (newArr[i + 1] === newArr[i] + 1) {
            continue
        } else {
            return newArr[i] + 1
        }
    }


}
let fmArr = [2, 1, 4, 5]
let N = 5

console.log(findMissingNumberInArray(fmArr, N))


// Best solution 
const findMissingNumber = (arr: number[], n: number): number => {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, val) => acc + val, 0);
    return expectedSum - actualSum;
};

console.log(findMissingNumber([2, 1, 4, 5], 5)); // Output: 3
