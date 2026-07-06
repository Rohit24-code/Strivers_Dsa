// Given an integer array nums, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False.
// Example 1
// Input : nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3
// Output: True
// Explanation: The element 3 is present in the array. So, the answer is True.
// Example 2
// Input : nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10
// Output: False
// Explanation:The element 10 is not present in the array. So, the answer is False.

export function searchInRotatedSortedAdvance(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) {
      return true;
    }
    if (arr[start] === arr[mid] && arr[mid] === arr[end]) {
      start++;
      end--;
      continue;
    } else if (arr[start] <= arr[mid]) {
      if (target >= arr[start] && target <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] <= arr[end]) {
      if (target >= arr[mid] && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return false;
}

let ans = searchInRotatedSortedAdvance([3, 1, 2, 3, 3, 3, 3], 1);

console.log(ans, "Ans");
