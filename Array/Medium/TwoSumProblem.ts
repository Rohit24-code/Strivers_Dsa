

const TwoSumProblem = (arr: number[], target: number) => {

    let obj: Record<number, number> = {}

    for (let i = 0; i < arr?.length; i++) {
        obj[arr[i]] = i
    }

    for (let j = 0; j < arr?.length; j++) {
        if (j != obj[target - arr[j]] && obj[target - arr[j]]) {
            return [j, obj[target - arr[j]]]
        }
    }

    return [-1, -1]

}

console.log(TwoSumProblem([], 1000000000))


// Optimised way of writing the same

// const TwoSumProblem = (arr: number[], target: number): [number, number] => {
//     let numToIndex: Record<number, number> = {};

//     for (let i = 0; i < arr.length; i++) {
//         const complement = target - arr[i];
//         if (complement in numToIndex) {
//             return [numToIndex[complement], i];
//         }
//         numToIndex[arr[i]] = i;
//     }

//     return [-1, -1];
// };