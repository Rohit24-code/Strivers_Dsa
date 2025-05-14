// Given an array of nums of n integers. Every integer in the array appears twice except one integer. Find the number that appeared once in the array.


// Examples:
// Input : nums = [1, 2, 2, 4, 3, 1, 4]

// Output : 3

// Explanation : The integer 3 has appeared only once.

// Input : nums = [5]

// Output : 5

// Explanation : The integer 5 has appeared only once.



const singleNumberOne = (nums: number[]) => {
    let obj: any = {}

    for (let i = 0; i < nums?.length; i++) {
        obj[nums[i]] = obj[nums[i]] + 1 || 1
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            return key
        }
    }

}

let sinArr: any = [1, 2, 2, 4, 3, 1, 4]



console.log(singleNumberOne(sinArr))



