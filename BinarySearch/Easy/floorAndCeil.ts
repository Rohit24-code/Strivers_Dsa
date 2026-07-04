// Given a sorted array nums and an integer x. Find the floor and ceil of x in nums. The floor of x is the largest element in the array which is smaller than or equal to x. The ceiling of x is the smallest element in the array greater than or equal to x. If no floor or ceil exists, output -1.
// Example 1
// Input : nums =[3, 4, 4, 7, 8, 10], x= 5
// Output: 4 7
// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.
// Example 2
// Input : nums =[3, 4, 4, 7, 8, 10], x= 8
// Output: 8 8
// Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.

const floorAndCeil = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1;
  let ceil = -1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] > target) {
      ceil = arr[mid];
      end = mid - 1;
    } else if (arr[mid] < target) {
      floor = arr[mid];
      start = mid + 1;
    } else {
      return [arr[mid], arr[mid]];
    }
  }

  return [floor, ceil];
};

let ans = floorAndCeil([3, 4, 4, 7, 8, 10], 6);
console.log(ans, "ans");
export default floorAndCeil;
