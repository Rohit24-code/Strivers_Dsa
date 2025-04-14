const ArmStrongNumber = (num: number) => {
  let length = num.toString().length;
  let persistNum = num;

  let sum = 0;
  while (num > 0) {
    let tempNum = num % 10;
    sum += tempNum ** length;
    num = Math.floor(num / 10);
  }

  return sum === persistNum;
};

let armAns = ArmStrongNumber(9474);
console.log(armAns);
