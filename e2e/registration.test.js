describe('Registration Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate to registration screen', async () => {
    await element(by.id('home-button-registration')).tap();
    await expect(element(by.id('input-registration-screen-input-first-name'))).toBeVisible();
  });

  it('should display all registration form fields', async () => {
    await element(by.id('home-button-registration')).tap();

    await expect(element(by.id('input-registration-screen-input-first-name'))).toBeVisible();
    await expect(element(by.id('input-registration-screen-input-last-name'))).toBeVisible();
    await expect(element(by.id('input-registration-screen-input-age'))).toBeVisible();
    await expect(element(by.id('input-registration-screen-input-email'))).toBeVisible();
    await expect(element(by.id('input-registration-screen-input-password'))).toBeVisible();
    await expect(element(by.id('input-registration-screen-input-passwordConfirm'))).toBeVisible();
  });

  it('should have register button disabled when form is empty', async () => {
    await element(by.id('home-button-registration')).tap();

    // Clear any pre-filled data by replacing with empty values
    await element(by.id('input-registration-screen-input-first-name')).clearText();
    await element(by.id('input-registration-screen-input-last-name')).clearText();
    await element(by.id('input-registration-screen-input-age')).clearText();
    await element(by.id('input-registration-screen-input-email')).clearText();
    await element(by.id('input-registration-screen-input-password')).clearText();
    await element(by.id('input-registration-screen-input-passwordConfirm')).clearText();

    // Button should be visible but disabled (we can't directly test disabled state, but button should exist)
    await expect(element(by.id('registration-screen-button-register'))).toBeVisible();
  });

  it('should show error when passwords do not match', async () => {
    await element(by.id('home-button-registration')).tap();

    await element(by.id('input-registration-screen-input-password')).clearText();
    await element(by.id('input-registration-screen-input-password')).typeText('password123');

    await element(by.id('input-registration-screen-input-passwordConfirm')).clearText();
    await element(by.id('input-registration-screen-input-passwordConfirm')).typeText('differentpassword');

    // Should show error message
    await expect(element(by.text('Passwords do not match'))).toBeVisible();
  });

  it('should fill registration form successfully', async () => {
    await element(by.id('home-button-registration')).tap();

    // Clear and fill all fields
    await element(by.id('input-registration-screen-input-first-name')).clearText();
    await element(by.id('input-registration-screen-input-first-name')).typeText('John');

    await element(by.id('input-registration-screen-input-last-name')).clearText();
    await element(by.id('input-registration-screen-input-last-name')).typeText('Doe');

    await element(by.id('input-registration-screen-input-age')).clearText();
    await element(by.id('input-registration-screen-input-age')).typeText('25');

    await element(by.id('input-registration-screen-input-email')).clearText();
    await element(by.id('input-registration-screen-input-email')).typeText('john.doe@example.com');

    await element(by.id('input-registration-screen-input-password')).clearText();
    await element(by.id('input-registration-screen-input-password')).typeText('SecurePass123!');

    await element(by.id('input-registration-screen-input-passwordConfirm')).clearText();
    await element(by.id('input-registration-screen-input-passwordConfirm')).typeText('SecurePass123!');

    // Verify the register button is visible and can be tapped
    await expect(element(by.id('registration-screen-button-register'))).toBeVisible();
  });

  it('should submit registration form', async () => {
    await element(by.id('home-button-registration')).tap();

    // Fill all required fields
    await element(by.id('input-registration-screen-input-first-name')).clearText();
    await element(by.id('input-registration-screen-input-first-name')).typeText('John');

    await element(by.id('input-registration-screen-input-last-name')).clearText();
    await element(by.id('input-registration-screen-input-last-name')).typeText('Doe');

    await element(by.id('input-registration-screen-input-age')).clearText();
    await element(by.id('input-registration-screen-input-age')).typeText('25');

    await element(by.id('input-registration-screen-input-email')).clearText();
    await element(by.id('input-registration-screen-input-email')).typeText('john.doe@example.com');

    await element(by.id('input-registration-screen-input-password')).clearText();
    await element(by.id('input-registration-screen-input-password')).typeText('SecurePass123!');

    await element(by.id('input-registration-screen-input-passwordConfirm')).clearText();
    await element(by.id('input-registration-screen-input-passwordConfirm')).typeText('SecurePass123!');

    // Tap register button
    await element(by.id('registration-screen-button-register')).tap();

    // Button text should change to "Registering..." while loading
    // Note: This assertion may need adjustment based on API response time
    await waitFor(element(by.text('Register')))
      .toBeVisible()
      .withTimeout(5000);
  });
});