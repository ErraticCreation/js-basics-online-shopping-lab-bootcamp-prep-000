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
  // Check if cart is empty
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
    // Set variable for string for return
    let inYourCart = "In your cart, you have";
    // Loop over contents of cart and add the applicable data to string for return
    for (let i = 0; i < cart.length; i++) {
      inYourCart = `${inYourCart} ${(i === cart.length - 1 && cart.length >= 2) ? 'and ' : ''}${cart[i].itemName} at $${cart[i].itemPrice}${i === cart.length -1 ? '.' : ','}`;
    }
    // return string
    return inYourCart;
  }
}

function total() {
  // Set variable for total
  let total = 0;
  // Loop through cart and add the total
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  // Return the total
  return total;
}

function removeFromCart(item) {
  let inCart = false;
  for (let i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      inCart = true;
      delete cart[i].itemName;
    } 
    if (!inCart) {
      return "That item is not in your cart.";
    } else {
      return cart;
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
