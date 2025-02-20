let arr = [1, 2, 3, 3, 4, 5, 6];

let checkSorted = (arr) => {
  for (let i = 1; i < arr?.length - 1; i++) {
    if (arr[i] >= arr[i - 1] && arr[i] <= arr[i + 1]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

console.log(checkSorted(arr));
