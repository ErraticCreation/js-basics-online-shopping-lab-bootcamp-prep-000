var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let itemToAdd = {itemName: item, itemPrice: Math.floor(Math.random() * Math.floor(100))};
 cart.push(itemToAdd);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  let inYourCart = "In your cart, you have";
  for (let i = 0; i < cart.length; i++) {
    
    inYourCart = `${inYourCart} ${cart[i].itemName} at $${cart[i].itemPrice}${i === cart.length -1 ? '.' : ','}`;
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
