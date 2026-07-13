// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// Product.prototype.getDiscountedPrice = function (discount) {
//   return this.price - discount;
// };

// const shirt = new Product("T-Shirt", 500);

// // Interviewer Tweak:
// shirt.getDiscountedPrice = function (num) {
//   return "No discount allowed! " + num;
// };

// console.log(shirt.getDiscountedPrice(50));

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyCoupon = function (discount) {
  return this.price - discount;
};

const shoes = new Product("Running Shoes", 2000);
console.log(shoes.applyCoupon(200));
