// You are given an integer n. You need to check if the number is prime or not. Return true if it is a prime number, otherwise return false.

// A prime number is a number which has no divisors except 1 and itself.

// Examples:
// Input: n = 5

// Output: true

// Explanation: The only divisors of 5 are 1 and 5 , So the number 5 is prime.

// Input: n = 8

// Output: false

// Explanation: The divisors of 8 are 1, 2, 4, 8, thus it is not a prime number.

// Brute force App
const CheckForPrime = (n: number) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    return true;
  } else {
    return false;
  }
};

let CheckForPrimeAns = CheckForPrime(6);
console.log(CheckForPrimeAns);


// Optimised solution

const OptimisedCheckForPrime=(n:number)=>{
  let count=0;
   for(let i=1;i*i<=n;i++){
    if(n%i===0){
      count++
      if(i!==n/i){
        count++
      }
    }
   }

   if(count===2){
    return true
   }else{
    return false
   }
}

let checkOptimisedCheckForPrime=OptimisedCheckForPrime(18)
console.log(checkOptimisedCheckForPrime,"checkOptimisedCheckForPrime")
