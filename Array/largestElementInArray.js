let arr=[1,4,2,6,3]

// Brute force 
let ans = arr?.sort((a,b)=>a-b)[arr?.length-1]
console.log(ans,"Ans")

// No Better solution 

// Optimial Solution 
let finalAns=arr[0]

for(let i=0;i<arr?.length;i++){
    if(finalAns<arr[i]){
        finalAns=arr[i]
    }
}

console.log(finalAns,"finalAns")