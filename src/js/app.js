const calculate_bonus = (cart) => {
  "use strict";
  if (cart.isArray()) && (!cart.some(isNaN)) {
    let cart_sum = 0;
    for (let item of cart) {
      sum += item;
    }
    sum > 10000 ? Math.round(sum * 0.05) : 0;
  } else {
    console.log("01 Input is not a user cart");
    return 0;
  }
}

const sample_cart = [200, 550, 4000, 23, 58, 5000, 485, 711];
console.log(calculate_bonus(sample_cart));
