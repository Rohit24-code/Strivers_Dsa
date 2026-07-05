// You are given a sorted array of integers arr and an integer target. Your task is to determine how many times target appears in arr.
// Return the count of occurrences of target in the array.
// Example 1
// Input: arr = [0, 0, 1, 1, 1, 2, 3], target = 1
// Output: 3
// Explanation: The number 1 appears 3 times in the array.
// Example 2
// Input: arr = [5, 5, 5, 5, 5, 5], target = 5
// Output: 6
// Explanation: All elements in the array are 5, so the target appears 6 times.

export function lowerBoundfn(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
}

export function upperBoundfn(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] > target) {
      ans = mid; // Only saves if strictly greater!
      end = mid - 1; // Check left side for smaller valid candidates
    } else {
      start = mid + 1; // If equal or smaller, look completely to the right side!
    }
  }
  return ans;
}

const countOccurance = (arr: number[], target: number) => {
  let lowerBound = lowerBoundfn(arr, target);
  let upperBound = upperBoundfn(arr, target);

  return upperBound - lowerBound;
};

let ans = countOccurance(
  [5, 7, 7, 8, 8, 8, 8, 10, 12, 12, 13, 14, 14, 14, 15],
  14,
);
console.log(ans, "ans");
export default countOccurance;
