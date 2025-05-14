const longestSubArray = (arr: number[], k: number): number => {
    let prefixSumMap: Record<number, number> = { 0: -1 }; // Initialize with 0 sum at index -1
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        // If (sum - k) exists in the map, update maxLen
        if ((sum - k) in prefixSumMap) {
            maxLen = Math.max(maxLen, i - prefixSumMap[sum - k]);
        }

        // Store the earliest occurrence of the sum
        if (!(sum in prefixSumMap)) {
            prefixSumMap[sum] = i;
        }
    }

    return maxLen;
};

console.log(longestSubArray([2, 3, 5, 1, 9], 10)); // Output: 3