// // roblem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

// // The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

// // Examples

// // Example 1:
// // Input:
// // n = 5,m = 5.
// // arr1[] = {1,2,3,4,5}  
// // arr2[] = {2,3,4,4,5}
// // Output:
// //  {1,2,3,4,5}

// // Explanation: 
// // Common Elements in arr1 and arr2  are:  2,3,4,5
// // Distnict Elements in arr1 are : 1
// // Distnict Elemennts in arr2 are : No distinct elements.
// // Union of arr1 and arr2 is {1,2,3,4,5} 

// // Example 2:
// // Input:
// // n = 10,m = 7.
// // arr1[] = {1,2,3,4,5,6,7,8,9,10}
// // arr2[] = {2,3,4,4,5,11,12}
// // Output: {1,2,3,4,5,6,7,8,9,10,11,12}
// // Explanation: 
// // Common Elements in arr1 and arr2  are:  2,3,4,5
// // Distnict Elements in arr1 are : 1,6,7,8,9,10
// // Distnict Elemennts in arr2 are : 11,12
// // Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 


// const unionOfTwoSorted = (arr1: number[], arr2: number[]) => {
//     if (!arr1 || !arr2) return arr1 ? arr1 : arr2

//     let ans: number[] = []
//     let p1 = 0;
//     let p2 = 0;


//     while (p1 < arr1?.length && p2 < arr2?.length) {
//         if (ans?.length == 0) {
//             ans.push(arr1[0] < arr2[0] ? arr1[0] : arr2[0])
//             p1++
//         } else {
//             if (ans[ans?.length - 1] != arr2[p2]) {
//                 ans.push(arr2[p2])
//                 p2++
//             } else {
//                 p2++
//             }

//             if (ans[ans?.length - 1] != arr1[p1]) {
//                 ans.push(arr1[p1])
//                 p1++
//             } else {
//                 p1++
//             }
//         }
//     }

//     if (arr1?.length !== arr2.length) {

//         let restIdx = p1 === arr1?.length ? p2 : p1
//         let restArr = p1 === arr1?.length ? arr2 : arr1

//         for (let i = restIdx; i < restArr?.length; i++) {
//             ans.push(restArr[i])
//         }

//     }


//     return ans

// }

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [2, 3, 4, 4, 5, 6, 7, 8]

// console.log(unionOfTwoSorted(arr1, arr2))


// BEST WAY 
// roblem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

// The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

// Examples

// Example 1:
// Input:
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1
// Distnict Elemennts in arr2 are : No distinct elements.
// Union of arr1 and arr2 is {1,2,3,4,5} 

// Example 2:
// Input:
// n = 10,m = 7.
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12}
// Output: {1,2,3,4,5,6,7,8,9,10,11,12}
// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1,6,7,8,9,10
// Distnict Elemennts in arr2 are : 11,12
// Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 


// const unionOfTwoSorted = (arr1: number[], arr2: number[]) => {
//     if (!arr1 || !arr2) return arr1 ? arr1 : arr2

//     let ans: number[] = []
//     let p1 = 0;
//     let p2 = 0;


//     while (p1 < arr1?.length && p2 < arr2?.length) {
//         if (ans?.length == 0) {
//             ans.push(arr1[0] < arr2[0] ? arr1[0] : arr2[0])
//             p1++
//         } else {
//             if (ans[ans?.length - 1] != arr2[p2]) {
//                 ans.push(arr2[p2])
//                 p2++
//             } else {
//                 p2++
//             }

//             if (ans[ans?.length - 1] != arr1[p1]) {
//                 ans.push(arr1[p1])
//                 p1++
//             } else {
//                 p1++
//             }
//         }
//     }

//     if (arr1?.length !== arr2.length) {

//         let restIdx = p1 === arr1?.length ? p2 : p1
//         let restArr = p1 === arr1?.length ? arr2 : arr1

//         for (let i = restIdx; i < restArr?.length; i++) {
//             ans.push(restArr[i])
//         }

//     }


//     return ans

// }

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [2, 3, 4, 4, 5, 6, 7, 8]

// console.log(unionOfTwoSorted(arr1, arr2))


const unionOfTwoSorted = (arr1: number[], arr2: number[]): number[] => {
    let i = 0, j = 0;
    const result: number[] = [];

    while (i < arr1.length && j < arr2.length) {
        const last = result[result.length - 1];

        if (arr1[i] < arr2[j]) {
            if (result.length === 0 || last !== arr1[i]) result.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (result.length === 0 || last !== arr2[j]) result.push(arr2[j]);
            j++;
        } else {
            // arr1[i] === arr2[j]
            if (result.length === 0 || last !== arr1[i]) result.push(arr1[i]);
            i++;
            j++;
        }
    }

    // Push remaining elements from arr1
    while (i < arr1.length) {
        const last = result[result.length - 1];
        if (result.length === 0 || last !== arr1[i]) result.push(arr1[i]);
        i++;
    }

    // Push remaining elements from arr2
    while (j < arr2.length) {
        const last = result[result.length - 1];
        if (result.length === 0 || last !== arr2[j]) result.push(arr2[j]);
        j++;
    }

    return result;
};

// Test
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 4, 5, 6, 7, 8];
console.log(unionOfTwoSorted(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
