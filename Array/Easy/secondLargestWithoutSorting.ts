
const secondLargestWithoutSorting = (arr: number[]) => {

    if (!arr || arr.length < 2) return undefined;

    let max = -Infinity;
    let secondmax = -Infinity


    for (let i = 0; i < arr?.length; i++) {
        if (arr[i] > max) {
            secondmax = max
            max = arr[i]
        } else if (arr[i] < max && arr[i] > secondmax) {
            secondmax = arr[i]
        }
    }



    return secondmax

}

console.log(secondLargestWithoutSorting([23, 43, 54, 64, 34, 745, 11, 2, 444, 65, 76, 45]))