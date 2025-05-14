// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

// Examples
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Input: nums = [0]
// Output: [0]



// INTITUATION
// [0.......low-1] = 0
// [low.....mid-1] = 1
// [high+1.....n-1] = 2



function sortArrayOfZeroOneTwo(arr: Array<number>) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (low >= mid || mid >= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else if (arr[mid] === 2) {
            [arr[high], arr[mid]] = [arr[mid], arr[low]]

        }
    }
}

export default sortArrayOfZeroOneTwo([2, 0, 2, 1, 1, 0])