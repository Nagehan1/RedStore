// Description: Main file to run the program
const Checkout = require('./Checkout.js');
  // Example Usage
  const pricingRules = {
    A: { unitPrice: 60, specialPrice: { qty: 3, price: 150 } },
    B: { unitPrice: 30, specialPrice: { qty: 2, price: 45 } },
    C: { unitPrice: 30 },
    D: { unitPrice: 25 },
  };
  
  const checkout = new Checkout(pricingRules); // Create a shopping cart
 
  // Add items to the cart
  checkout.scan('A');
  checkout.scan('B');
  checkout.scan('A');
  checkout.scan('B');
  checkout.scan('A');
  checkout.scan('C');

  
  const totalPrice = checkout.total(); // Calculate the total price
  
  console.log(`Total Price: ${totalPrice}`); // Print the total price