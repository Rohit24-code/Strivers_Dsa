// One method to do inheritance / prototype
// const students = {
//   batch: "web 17",
//   year: 2022,
//   course: "masai",
//   duration: "9 months",
// };

// all the inherited property is in Prototype
// const rohit = Object.create(students);
// rohit.age = "30 yrs";
// rohit.gender = "male";
// rohit.country = "India";

// console.log(rohit.duration, "rohuit", rohit);

// Constructor function

// function Student(n, a) {
//   this.name = n;
//   this.age = a;
// }

// Student.prototype.course = "Masai";

// let s1 = new Student("rohit", 23);
// console.log(s1, "s1");

// function Product(n, p, b) {
//   this.name = n;
//   this.price = p;
//   this.brand = b;
// }

// Product.prototype.Coupon = function (dis) {
//   return this.price - dis;
// };

// const shirt = new Product("T-shirt", 233, "Puma");

// console.log(shirt.Coupon(10));

// Custom Array functions
// let a1 = new Array(1, 2, 3);
// console.log(a1);

function MyArr() {
  this.length = arguments.length;

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
}

let a2 = new MyArr(1, 2, 3);

console.log(a2, "A2");

MyArr.prototype.myPush = function (value) {
  let index = this.length;
  this[index] = value;
  this.length++;
};

// MyArr.prototype.myFilter = function (fn, thisValue) {
//   console.log(this, "this");
//   for (let i = 0; i < this.length; i++) {
//     fn(this[i], i, this);
//   }
// };

MyArr.prototype.myMap = function (fn) {
  // console.log(this, "this array");
  let ans = new MyArr();
  let result = null;
  for (let i = 0; i < this.length; i++) {
    result = fn(this[i], i, this);
    ans.myPush(result);
    // console.log(this[i]);
  }

  return ans;
};

a2.myPush(6);
let mapArray = a2.myMap((item, index, arr) => {
  return item + 2;
});
console.log(mapArray, "mapArray");
// a2.myFilter((item) => item === 2);
// let newFilteredArray = a2.myFilter((item) => item === 3);
// console.log(newFilteredArray, "newFilteredArray", a2);
