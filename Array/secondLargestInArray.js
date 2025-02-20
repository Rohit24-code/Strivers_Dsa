let arr=[1,4,5,3,8]

// Brute force 
let ans = arr?.sort((a,b)=>a-b)[arr?.length-2]
console.log(ans,"Ans")

// No Better solution 

// Optimial Solution 
let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0;i<arr?.length;i++){
    
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest,"secondLargest")