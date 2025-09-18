// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    headless: false,       // 👈 Show the browser
    slowMo: 100,           // 👈 Optional: slow down actions for visibility
  },
projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      viewport: { width: 1366, height: 768 },
      screenshot: 'on',
      video: 'on',
      trace: 'on',
    },
  },
],

  
});
