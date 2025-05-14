
const removeDuplicateFromSortedArray = (arr: number[]) => {

    let i = 0;

    for (let j = 1; j < arr?.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }


    return i + 1

}

console.log(removeDuplicateFromSortedArray([3, 3, 4, 4, 4, 5]))