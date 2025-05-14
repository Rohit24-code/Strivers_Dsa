// roblem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

// Examples

// Example 1:
// Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

// Example 2:
// Input: 1,2,0,1,0,4,0
// Output: 1,2,1,4,0,0,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

// const moveAllZeroToEnd = (arr: number[]) => {
//     let p1 = 0;
//     let p2 = arr?.length - 1

//     while (p1 < p2) {
//         if (!arr[p1] && arr[p2]) {
//             [arr[p1], arr[p2]] = [arr[p2], arr[p1]]
//             p1++
//             p2--
//         } else if (arr[p1]) {
//             p1++
//         } else if (!arr[p2]) {
//             p2--
//         }
//     }

//     return arr


// }

// console.log(moveAllZeroToEnd([1, 2, 0, 1, 0, 4, 0]))


// Best and correct approch
// roblem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

// Examples

// Example 1:
// Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

// Example 2:
// Input: 1,2,0,1,0,4,0
// Output: 1,2,1,4,0,0,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

const moveAllZeroToEnd = (arr: number[]): number[] => {
    let insertPos = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }

    // Fill remaining positions with 0
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }

    return arr;
}

console.log(moveAllZeroToEnd([1, 2, 0, 1, 0, 4, 0]));
// Output: [1, 2, 1, 4, 0, 0, 0]
