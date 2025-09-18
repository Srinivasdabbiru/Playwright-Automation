//const {test,expect}=require("@playwright/test")

//test("Login",async function({page}){
  //  await page.goto("https://automationexercise.com")
     
    //await page.locator("(//input[@type='email'])[1]").fill("ramm.d@microgridtechsol.com")

    //await page.locator('//input[@data-qa=\"login-password\"]').fill("Srinu@1989")

     

      //await page.locator('//button[@data-qa=\"login-button\"]').click()




//}
//)

const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  // Click on 'Signup / Login' link first, because email input is not visible on the home page
  await page.click('a[href="/login"]');

  // Fill in the login email
  await page.locator('(//input[@type="email"])[1]').fill('ramm.d@microgridtechsol.com');

  // Fill in the password
  await page.locator('//input[@data-qa="login-password"]').fill('Srinu@1989');

  // Click the login button
  await page.locator('//button[@data-qa="login-button"]').click();


  
  // Optionally, you can add an assertion to check login success
  await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
});
