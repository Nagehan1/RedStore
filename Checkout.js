class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules; // Store pricing rules
    this.items = {}; // Store items and their quantities in the cart
  }
  // Add an Item to the Cart
  scan(item) {
    // If the item is already in the cart, increase its quantity; otherwise, set it to 1.
    this.items[item] = (this.items[item] || 0) + 1;
  }

  //  Calculate the Total Price
  total() {
    let totalPrice = 0;
    for (const item in this.items) {
      // If the item has a pricing rule, proceed; otherwise, print an error message.
      if (this.pricingRules[item]) {
        const { unitPrice, specialPrice } = this.pricingRules[item];
        const itemCount = this.items[item];

        // If there's a special price, calculate the discounted price and the regular price
        if (specialPrice) {
          const specialOffers = Math.floor(itemCount / specialPrice.qty);
          totalPrice += specialOffers * specialPrice.price;
          totalPrice += (itemCount % specialPrice.qty) * unitPrice;
        } else {
          totalPrice += itemCount * unitPrice; // Add the price of regular items
        }
      } else {
        console.error(`No pricing rule found for item: ${item}`);
      }
    }

    return totalPrice;
  }
}

module.exports = Checkout;
