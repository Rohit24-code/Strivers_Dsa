// roblem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// Examples
// Example 1:
// Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 
// Output: 6 

// Explanation: [4,-1,2,1] has the largest sum = 6. 

// Examples 2: 

// Input: arr = [1] 

// Output: 1 

// Explanation: Array has only one element and which is giving positive sum of 1.


const ExtendedKadaneProblem = (arr: number[]) => {
    if (arr.length === 0) return { sum: 0, subarray: [] };

    let maxSum = arr[0];
    let currentSum = 0;

    let start = 0;
    let tempStart = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1; // next index could start a new subarray
        }
    }

    return {
        sum: maxSum,
        subarray: arr.slice(start, end + 1),
    };
};

console.log(ExtendedKadaneProblem([-2, 1, -3, 4, -1, 2, 1, -5, 4]))