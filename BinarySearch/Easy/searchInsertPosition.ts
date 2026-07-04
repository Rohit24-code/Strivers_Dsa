// Given a sorted array of nums consisting of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// Example 1
// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2
// Explanation: The target value 5 is found at index 2 in the sorted array. Hence, the function returns 2.
// Example 2
// Input: nums = [1, 3, 5, 6], target = 2
// Output: 1
// Explanation: The target value 2 is not found in the array. However, it should be inserted at index 1 to maintain the sorted order of the array.

const searchInsertPosition = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = arr.length;

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
};

let ans = searchInsertPosition([0, 1, 2, 3, 5, 6], 4);
console.log(ans, "ans");
export default searchInsertPosition;
