import { test, expect } from '@playwright/test';

test.skip('should show transaction map on customers profile', async ({ page }) => {
  await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle' });
  await page.getByText('Sign in using Google').waitFor();

  await page.getByText('Sign in using Google').click();
  await page.getByText('Customers').waitFor();

  await page.getByText('Customers').click();

  await new Promise((r) =>
    setTimeout(async () => {
      expect(
        await page.screenshot({
          fullPage: true
        })
      ).toMatchSnapshot('map.png', { maxDiffPixelRatio: 0.01 });

      r('done');
    }, 2000)
  );

  await expect(page.locator('.leaflet-container')).toBeVisible();
  await expect(page.locator('.leaflet-control-zoom-in')).toBeVisible();
  await expect(page.locator('.leaflet-control-zoom-out')).toBeVisible();
  await expect(page.locator('.marker-cluster')).toBeVisible();
});
