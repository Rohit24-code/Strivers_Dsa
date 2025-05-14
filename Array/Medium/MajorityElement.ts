// Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

// Examples

// Example 1:
// Input Format: N = 3, nums[] = {3,2,3}
// Result: 3
// Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution.

// Example 2:
// Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}

// Result: 2

// Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Example 3:
// Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}



// const MajorityElement = (arr: number[]) => {
//     let obj: Record<number, number> = {}
//     let times = Math.floor(arr?.length / 2)

//     for (let key of arr) {
//         obj[key] = obj[key] + 1 || 1
//         if (obj[key] > times)
//             return key
//     }
// }

// console.log(MajorityElement([2, 2, 1, 1, 1, 2, 2]))


// Moore's Voting algorithm

// Intuition Behind the Algorithm
// The key idea is that if an element occurs more than n/2 times, it will "dominate" the array. We can simulate a voting process where:
// Each occurrence of the candidate element is a vote in favor.
// Each occurrence of a different element is a vote against.
// If votes become zero, we switch the candidate to the current element.
// At the end, the surviving candidate must be the majority element.




const MajorityElement = (arr: number[]) => {
    let el = arr[0];
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (count === 0) {
            el = arr[i];
            count = 1;
        } else if (arr[i] === el) {
            count++;
        } else {
            count--;
        }
    }

    return el;
};

console.log(MajorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
