const { createOrder, getOrderStatus } = require('./order');

describe('Order Feature', () => {
  test('Creating an order with valid items should succeed', () => {
    const items = [{ name: 'Book', price: 100, quantity: 2 }];
    expect(createOrder(items, null).success).toBe(true);
  });

  test('Empty cart should return success: false and order: null', () => {
    expect(createOrder([], null).success).toBe(false);
    expect(createOrder([], null).order).toBeNull();
  });
  test('Order total should be calculated correctly', () => {
    const items = [{ name: 'Book', price: 100, quantity: 2 }];
    expect(createOrder(items, null).order.total).toBe(102);
  });

  test('SAVE10 coupon should apply a 10% discount', () => {
    const items = [{ name: 'Book', price: 100, quantity: 2 }];
    // 102 * 0.9 = 91.8
    expect(createOrder(items, 'SAVE10').order.total).toBe(91.8);
  });

  test('When no coupon is provided, coupon should be null', () => {
    const items = [{ name: 'Book', price: 100, quantity: 2 }];
    expect(createOrder(items, null).order.coupon).toBeNull();
  });

  test('An order above ₹1000 should have status PREMIUM', () => {
    const items = [{ name: 'Laptop', price: 1000, quantity: 1 }];
    const orderObj = createOrder(items, null).order;
    expect(getOrderStatus(orderObj)).toBe('PREMIUM');
  });
});