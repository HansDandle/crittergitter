import { test, expect } from '@playwright/test';

test.describe('Residential Lead Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/residential');
  });

  test('displays form fields', async ({ page }) => {
    await expect(page.locator('h2')).toContainText('Request an Assessment');
    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('select[name="issueType"]')).toBeVisible();
  });

  test('shows validation errors on invalid submission', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toHaveCount(11);
  });

  test('submits valid form successfully', async ({ page }) => {
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="phone"]', '(555) 123-4567');
    await page.fill('input[name="address"]', '123 Main St');
    await page.fill('input[name="city"]', 'Springfield');
    await page.selectOption('select[name="state"]', 'IL');
    await page.fill('input[name="zipCode"]', '62701');
    await page.selectOption('select[name="issueType"]', 'squirrels');
    await page.selectOption('select[name="issueSeverity"]', 'moderate');
    await page.fill(
      'textarea[name="issueDescription"]',
      'Squirrels in the attic making noise at night'
    );

    await page.click('button[type="submit"]');
    await expect(page.locator('.form-message')).toContainText('Thank you');
  });

  test('shows error for invalid email', async ({ page }) => {
    await page.fill('input[name="email"]', 'invalid-email');
    await page.click('button[type="submit"]');
    await expect(page.locator('#email-error')).toContainText('Invalid email');
  });

  test('shows error for invalid phone', async ({ page }) => {
    await page.fill('input[name="phone"]', '123');
    await page.click('button[type="submit"]');
    await expect(page.locator('#phone-error')).toContainText('Invalid phone');
  });

  test('enforces minimum description length', async ({ page }) => {
    await page.fill('textarea[name="issueDescription"]', 'Short');
    await page.click('button[type="submit"]');
    await expect(page.locator('#issueDescription-error')).toContainText('Provide more detail');
  });
});

test.describe('Enterprise Lead Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/enterprise');
  });

  test('displays form fields', async ({ page }) => {
    await expect(page.locator('h2')).toContainText('Request a Facility Assessment');
    await expect(page.locator('input[name="companyName"]')).toBeVisible();
    await expect(page.locator('input[name="contactFirstName"]')).toBeVisible();
  });

  test('requires at least one service selection', async ({ page }) => {
    await page.fill('input[name="companyName"]', 'Acme Corp');
    await page.fill('input[name="contactFirstName"]', 'Jane');
    await page.fill('input[name="contactLastName"]', 'Smith');
    await page.fill('input[name="email"]', 'jane@acme.com');
    await page.fill('input[name="phone"]', '(555) 123-4567');
    await page.fill('input[name="address"]', '456 Business Blvd');
    await page.fill('input[name="city"]', 'Chicago');
    await page.selectOption('select[name="state"]', 'IL');
    await page.fill('input[name="zipCode"]', '60601');
    await page.selectOption('select[name="facilityType"]', 'commercial');
    await page.fill(
      'textarea[name="projectScope"]',
      'We need comprehensive rodent prevention throughout our commercial kitchen and storage areas.'
    );
    await page.selectOption('select[name="timeline"]', 'standard');

    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toContainText('Select at least one');
  });

  test('submits valid enterprise form', async ({ page }) => {
    await page.fill('input[name="companyName"]', 'Acme Corp');
    await page.fill('input[name="contactFirstName"]', 'Jane');
    await page.fill('input[name="contactLastName"]', 'Smith');
    await page.fill('input[name="email"]', 'jane@acme.com');
    await page.fill('input[name="phone"]', '(555) 123-4567');
    await page.fill('input[name="address"]', '456 Business Blvd');
    await page.fill('input[name="city"]', 'Chicago');
    await page.selectOption('select[name="state"]', 'IL');
    await page.fill('input[name="zipCode"]', '60601');
    await page.selectOption('select[name="facilityType"]', 'commercial');
    await page.check('input[type="checkbox"]', { hasText: 'Rodent Prevention' });
    await page.fill(
      'textarea[name="projectScope"]',
      'We need comprehensive rodent prevention throughout our commercial kitchen and storage areas.'
    );
    await page.selectOption('select[name="timeline"]', 'standard');

    await page.click('button[type="submit"]');
    await expect(page.locator('.form-message')).toContainText('Thank you');
  });
});

test.describe('Privacy & Compliance', () => {
  test('residential form includes privacy disclaimer', async ({ page }) => {
    await page.goto('http://localhost:3000/residential');
    await expect(page.locator('.form-disclaimer')).toContainText('licensed wildlife specialists');
  });

  test('enterprise form includes compliance disclaimer', async ({ page }) => {
    await page.goto('http://localhost:3000/enterprise');
    await expect(page.locator('.form-disclaimer')).toContainText('licensed wildlife exclusion specialists');
  });

  test('about page clearly states referral model', async ({ page }) => {
    await page.goto('http://localhost:3000/about');
    await expect(page.locator('body')).toContainText('referral');
    await expect(page.locator('body')).toContainText('independent');
    await expect(page.locator('body')).toContainText('licensed');
  });
});
