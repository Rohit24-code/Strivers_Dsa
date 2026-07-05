// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].
// Example 1
// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Explanation:The target is 8, and it appears in the array at indices 3 and 4, so the output is [3,4]
// Example 2
// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]
// Expalantion: The target is 6, which is not present in the array. Therefore, the output is [-1, -1].

export function lowerBoundfn(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] >= target) {
      //   if (arr[mid] === target) {
      ans = mid;
      //   }
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

const firstLastOccurance = (arr: number[], target: number) => {
  let lowerBound = lowerBoundfn(arr, target);
  let upperBound = upperBoundfn(arr, target);

  if (arr[upperBound - 1] != target) {
    return [-1, -1];
  }

  return [lowerBound, upperBound - 1];
};

let ans = firstLastOccurance(
  [5, 7, 7, 8, 8, 8, 8, 10, 12, 12, 13, 14, 14, 14, 15],
  14,
);
console.log(ans, "ans");
export default firstLastOccurance;
