// Given a sorted array of integers nums with 0-based indexing, find the index of a specified target integer. If the target is found in the array, return its index. If the target is not found, return -1.

// Example 1

// Input: nums = [-1,0,3,5,9,12], target = 9

// Output: 4

// Explanation: The target integer 9 exists in nums and its index is 4

// Example 2

// Input: nums = [-1,0,3,5,9,12], target = 2

// Output: -1

// Explanation: The target integer 2 does not exist in nums so return -1

export function binarySearch(nums: number[], target: number): number {
  let p1 = 0;
  let p2 = nums?.length - 1;

  while (p1 <= p2) {
    // let mid = Math.floor((p1 + p2) / 2);
    let mid = Math.floor(p1 + (p2 - p1) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      p1 = mid + 1;
    } else if (nums[mid] > target) {
      p2 = mid - 1;
    }
  }

  return -1;
}

let ans: number = binarySearch([-1, 0, 3, 5, 9, 12], 9);
console.log(ans);
