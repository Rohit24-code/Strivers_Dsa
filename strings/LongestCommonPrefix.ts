// Longest Common Prefix
// Subscribe to TUF+

// Hints
// Company
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1
// Input : str = ["flowers" , "flow" , "fly", "flight" ]
// Output : "fl"
// Explanation :
// All strings given in array contains common prefix "fl".
// Example 2
// Input : str = ["dog" , "cat" , "animal", "monkey" ]
// Output : ""
// Explanation :
// There is no common prefix among the given strings in array.

export const LongestCommonPrefix = (arr: string[]) => {
  let ans = "";
  let min = Math.min();

  const checkStr = (str: string) => {};

  for (let i = 0; i < arr.length; i++) {
    checkStr(arr[i]);
  }
};

let ans = LongestCommonPrefix(["flowers", "flow", "fly", "flight"]);
