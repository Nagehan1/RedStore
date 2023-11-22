const Checkout = require('./Checkout');

// Test case 1: Scanning items without pricing rules
function testScanWithoutPricingRules() {
  const checkout = new Checkout({});
  
  checkout.scan('A');
  checkout.scan('B');
  checkout.scan('C');
  
  const total = checkout.total();
  
 
  console.assert(total === 0, 'Test case 1 failed');
}

// Test case 2: Scanning items with pricing rules
function testScanWithPricingRules() {
  const pricingRules = {
    A: { unitPrice: 50, specialPrice: { qty: 3, price: 130 } },
    B: { unitPrice: 30 },
    C: { unitPrice: 20, specialPrice: { qty: 2, price: 35 } },
  };
  
  const checkout = new Checkout(pricingRules);
  
  checkout.scan('A');
  checkout.scan('B');
  checkout.scan('C');
  checkout.scan('A');
  checkout.scan('A');
  
  const total = checkout.total();
  
  // Assert that the total price is calculated correctly based on the pricing rules
  console.assert(total === 180, 'Test case 2 failed');
}

// Test case 3: Scanning items with missing pricing rule
function testScanWithMissingPricingRule() {
  const pricingRules = {
    A: { unitPrice: 50 },
    B: { unitPrice: 30 },
  };
  
  const checkout = new Checkout(pricingRules);
  
  checkout.scan('A');
  checkout.scan('B');
  checkout.scan('C');
  
  const total = checkout.total();
  
  // Assert that an error message is printed for the missing pricing rule
  console.assert(total === 80, 'Test case 3 failed');
}

// Run the test cases
testScanWithoutPricingRules();
testScanWithPricingRules();
testScanWithMissingPricingRule();