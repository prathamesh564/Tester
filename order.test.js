const { createOrder } = require('./order');

describe('Order Feature', () => {
  test('Order should fail when cart is empty', () => {
    expect(createOrder([], null).success).toBe(false);
  });

  test('Order should be created successfully without coupon', () => {
    const items = [{ name: 'Book', price: 100, quantity: 2 }];
    expect(createOrder(items, null).success).toBe(true);
  });

  test('Total should be calculated correctly', () => {
    const items = [{ name: 'Book', price: 100, quantity: 2 }];
    expect(createOrder(items, null).order.total).toBe(200);
  });

  test('SAVE10 coupon should apply 10% discount', () => {
    const items = [{ name: 'Book', price: 100, quantity: 2 }];
    expect(createOrder(items, 'SAVE10').order.total).toBe(180);
  });
});