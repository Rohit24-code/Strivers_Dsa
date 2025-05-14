
// Given a binary array nums, return the maximum number of consecutive 1's in the array.



// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2


// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

const maximumConsecutiveOnes = (num: number[]) => {

    let max = 0;
    let temp = 0

    for (let i = 0; i < num?.length; i++) {
        if (num[i]) {
            temp++
        } else {

            if (temp > max) {
                max = temp
            }
            temp = 0
        }
    }

    // In case array ends with 1s
    return Math.max(max, temp);

}

let maxnums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]

console.log(maximumConsecutiveOnes(maxnums))