// Given an integer array nums of size N, sorted in ascending order with distinct values, and then rotated an unknown number of times (between 1 and N), find the minimum element in the array.
// Example 1
// Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]
// Output: 0
// Explanation: Here, the element 0 is the minimum element in the array.
// Example 2
// Input : nums = [3, 4, 5, 1, 2]
// Output: 1
// Explanation:Here, the element 1 is the minimum element in the array.

export const minInRotatedSorted = (arr: number[]) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      if (arr[mid - 1] > arr[mid] && arr[mid + 1] > arr[mid]) {
        return arr[mid];
      } else if (
        (arr[mid - 1] > arr[mid] && mid + 1 > arr.length - 1) ||
        (arr[mid + 1] > arr[mid] && mid - 1 < 0)
      ) {
        return arr[mid];
      } else {
        end = mid - 1;
      }
    }
  }
};

let ans = minInRotatedSorted([5, 1, 2, 3, 4]);
console.log(ans, "answer");
//ese elemt jiske dono side k no bde honge

// ai code
// export const minInRotatedSorted = (arr: number[]): number => {
//   let start = 0;
//   let end = arr.length - 1;
//   let ans = Infinity;

//   while (start <= end) {
//     let mid = start + Math.floor((end - start) / 2);

//     // If the left half is sorted
//     if (arr[start] <= arr[mid]) {
//       ans = Math.min(ans, arr[start]); // Grab smallest from left half
//       start = mid + 1;                 // Move right
//     }
//     // If the right half is sorted
//     else {
//       ans = Math.min(ans, arr[mid]);   // Grab smallest from right half
//       end = mid - 1;                   // Move left
//     }
//   }
//   return ans;
// };
