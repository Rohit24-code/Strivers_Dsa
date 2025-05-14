

const largestElementInArray = (arr: number[]) => {
    let min = -Infinity;

    for (let i = 0; i < arr?.length; i++) {
        if (arr[i] > min) {
            min = arr[i]
        }
    }

    return min
}

console.log(largestElementInArray([2, 324, 54, 34, 2, 34, 324, 54, 657, 575, 75, 43]))

// cleaner appr
// const largestElementInArray = (arr: number[]) =>
//     arr.reduce((max, num) => num > max ? num : max, -Infinity);