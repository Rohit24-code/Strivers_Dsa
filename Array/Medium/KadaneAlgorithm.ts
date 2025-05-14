// Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.

// A subarray is a contiguous non-empty sequence of elements within an array.
// Examples:
// Input: nums = [2, 3, 5, -2, 7, -4]
// Output: 15

// Explanation: The subarray from index 0 to index 4 has the largest sum = 15
// Input: nums = [-2, -3, -7, -2, -10, -4]
// Output: -2

// Explanation: The element on index 0 or index 3 make up the largest sum when taken as a subarray

const KadaneAlgorithm = (arr: number[]) => {
    let max = arr[0];
    let sum = arr[0]

    for (let i=1;i<arr?.length;i++) {

        let newSum = sum + arr[i]

        sum = newSum
        if (newSum > max) {
            max = newSum
        }
    }

    return max

}

console.log(KadaneAlgorithm([3, -2, 5, -1]))

// const KadaneAlgorithm = (arr: number[]) => {
//     let maxSum = arr[0]; // Initialize with the first element
//     let currentSum = arr[0]; // Start with the first element

//     for (let i = 1; i < arr.length; i++) {
//         // Decide whether to start a new subarray at `arr[i]` or extend the previous subarray
//         currentSum = Math.max(arr[i], currentSum + arr[i]);
        
//         // Update the maximum sum found so far
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum;
// };

// console.log(KadaneAlgorithm([2, 3, 5, -2, 7, -4])); // Output: 15
// console.log(KadaneAlgorithm([-2, -3, -7, -2, -10, -4])); // Output: -2