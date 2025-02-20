// brute force is using set


// 0{N} optimised approch
let arr = [1, 2, 2, 2, 2, 2, 3, 4, 4, 4, 5, 5];

let p1 = 0;
let p2 = 1;

while (p2 <= arr?.length - 1) {
  if (arr[p1] != arr[p2]) {
    arr[p1 + 1] = arr[p2];
    p1++;
    p2++;
  } else {
    p2++;
  }
}

console.log(p1+1);
