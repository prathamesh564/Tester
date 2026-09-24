const { signup, login } = require('./auth');

describe('Auth Feature', () => {
  // 1. Successful signup
  test('New User', () => {
    expect(signup('Sohan P Rai', 'sohan@gmail.com', 'sohan123').success).toBe(true);
  });

  test('Signing up with an email that already exists should fail', () => {
    expect(signup('Sohan P Rai', 'sohan@gmail.com', 'sohan123').success).toBe(false);
  });

  test('A registered user should be able to login with the correct password', () => {
    expect(login('sohan@gmail.com', 'sohan123').success).toBe(true);
  });

  test('Login should fail when the password is incorrect', () => {
    expect(login('sohan@gmail.com', 'wrongpassword').success).toBe(false);
  });
});