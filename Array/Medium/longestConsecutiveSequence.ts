// Given an array nums of n integers, return the length of the longest sequence of consecutive integers. The integers in this sequence can appear in any order.


// Examples:
// Input: nums = [100, 4, 200, 1, 3, 2]

// Output: 4

// Explanation: The longest sequence of consecutive elements in the array is [1, 2, 3, 4], which has a length of 4. This sequence can be formed regardless of the initial order of the elements in the array.

// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

// Output: 9

// Explanation: The longest sequence of consecutive elements in the array is [0, 1, 2, 3, 4, 5, 6, 7, 8], which has a length of 9. 


function longestConsecutive(nums: any) {
    const numSet: any = new Set(nums); // Step 1
    let maxLen = 0;

    for (let num of numSet) {
        // Step 2: Only start counting if `num - 1` is NOT in the set
        if (!numSet.has(num - 1)) {
            let currentNum: number = num;
            let currentStreak = 1;

            // Step 3: Check how many consecutive numbers exist
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Step 4: Update max length
            maxLen = Math.max(maxLen, currentStreak);
        }
    }

    return maxLen;
}
