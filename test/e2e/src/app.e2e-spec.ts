describe('Home page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4200');
  });

  it('should be titled "angular-jest-puppeteer-material-tailwindcss-starter"', async () => {
    expect(await page.title()).toBe('angular-jest-puppeteer-material-tailwindcss-starter');
  });
});
