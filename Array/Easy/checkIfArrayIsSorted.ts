

function checkIfArrayIsSorted(arr: number[]) {
    for (let i = 0; i < arr?.length - 1; i++) {
        if (arr[i + 1] < arr[i]) return false
    }

    return true
}

console.log(checkIfArrayIsSorted([1, 3, 6, 8, 9, 23, 45, 67]))


// concise
// const checkIfArrayIsSorted = (arr: number[]) =>
// arr?.every((num, i) => i === 0 || num >= arr[i - 1]);