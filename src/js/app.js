const calculate_bonus = (cart) => {
  "use strict";
  if (Array.isArray(cart)) {
    if (!cart.some(isNaN)) {
      let cart_sum = 0;
      for (let item of cart) {
        cart_sum += item;
      }
      return cart_sum > 10000 ? Math.round(cart_sum * 0.05) : 0;
    } else {
      console.log("02 Input contains wrong values");
      return 0;
    }
  } else {
    console.log("01 Input is not a user cart");
    return 0;
  }
}

const sample_cart = [200, 550, 4000, 23, 58, 5000, 485, 711];
const bonus_value = calculate_bonus(sample_cart);
document.getElementById("sample_data").innerHTML += sample_cart;
console.log(bonus_value);
document.getElementById("answer").innerHTML += bonus_value;
