

const rotateArrayByOnePlace = (arr: number[]) => {
    let lastNum = arr[0];

    for (let i = 0; i < arr?.length - 1; i++) {
        arr[i] = arr[i + 1]
    }

    arr[arr?.length - 1] = lastNum

    return arr

}

console.log(rotateArrayByOnePlace([1, 2, 3, 4, 5]))