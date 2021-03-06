var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var m = Math.random();
  m = m * 1000;
  m = Math.floor(m);
  m = m / 100;
  var obj = {};
  obj[item] = m;
  cart.push(obj);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var string = `In your cart, you have `;
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        string += `${item} at $${cart[i][item]}`;
      }
      if (i === (l-1)) {
        string += `.`;
      }
      else {
        string += `, `;
      }
    }
    console.log(`${string}`);
  }
}

function removeFromCart(name) {
  var n = cart.length;
  for (var i = 0, l = cart.length; i < l; i++) {  
    if (cart[i].hasOwnProperty(`${name}`)) {
      cart.splice(i, 1);
    }
  }
  if (n === cart.length) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}
