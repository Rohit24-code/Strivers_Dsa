// Given an array arr of n integers, where arr[i] represents price of the stock on the ith day. Determine the maximum profit achievable by buying and selling the stock at most once. 



// The stock should be purchased before selling it, and both actions cannot occur on the same day.


// Examples:
// Input: arr = [10, 7, 5, 8, 11, 9]

// Output: 6

// Explanation: Buy on day 3 (price = 5) and sell on day 5 (price = 11), profit = 11 - 5 = 6.

// Input: arr = [5, 4, 3, 2, 1]

// Output: 0

// Explanation: In this case, no transactions are made. Therefore, the maximum profit remains 0.

[8, 2, 1, 6, 11, 3, 12]




const BestTimeToBuyAndSellStock = (arr: number[]) => {
    let lastMin = arr[0];
    let ans = 0;

    for (let i = 1; i < arr?.length; i++) {
        if (arr[i] < lastMin) {
            lastMin = arr[i]
        }

        let diff = arr[i] - lastMin

        if (diff > ans) {
            ans = diff
        }

    }

    return ans

}

console.log(BestTimeToBuyAndSellStock([10, 7, 5, 8, 11, 9]))