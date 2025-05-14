

const rotateArrayByNPlaces = (arr: number[], times: number) => {

    let finalTimes = times % arr?.length

    let temparr = [];
    let frontArr = []

    for (let i = 0; i < finalTimes; i++) {
        temparr.push(arr[i])
    }

    for (let j = 0; j < arr?.length - finalTimes; j++) {
        frontArr.push(arr[finalTimes + j])
    }

    return [...frontArr, ...temparr]


}

console.log(rotateArrayByNPlaces([1, 2, 3, 4, 5, 6], 5))

// optimised solution  must look  *****

// const rotateArrayInPlace = (arr: number[], times: number) => {
//     const n = arr.length;
//     const finalTimes = times % n;
//     if (finalTimes === 0) return arr; // No rotation needed

//     const reverse = (start: number, end: number) => {
//         while (start < end) {
//             [arr[start], arr[end]] = [arr[end], arr[start]];
//             start++;
//             end--;
//         }
//     };

//     reverse(0, n - 1); // Reverse the whole array
//     reverse(0, finalTimes - 1); // Reverse the first part
//     reverse(finalTimes, n - 1); // Reverse the second part

//     return arr;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// rotateArrayInPlace(arr, 8);
// console.log(arr); // Output: [5, 6, 1, 2, 3, 4]
