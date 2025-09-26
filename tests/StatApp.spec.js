

const { test, expect } = require('@playwright/test');

test('Login with iframe', async ({ page }) => {
  // Go to the page
  test.setTimeout(200000);   
  await page.goto('https://statapppreprod.micnxt.com/statapp.html');

  // Click the chat icon
  await page.click('//img[@src="https://statapppreprod.micnxt.com/assets/images/chat-icon.jpg"]');

  // Wait for iframe to be attached
  const frameElementHandle = await page.waitForSelector('iframe'); // Use better selector if available (id or name)

  // Get the iframe
  const frame = await frameElementHandle.contentFrame();

  // Now use locator inside the iframe
  const nameInput = frame.locator('//input[@formcontrolname="enteredName"]');

  // Wait until visible
 // await nameInput.waitFor({ state: 'visible', timeout: 10000 });

  // Click and fill
  await nameInput.click();
  await nameInput.fill('Srinu');
  await frame.locator("//button[normalize-space()='Iniziamo!']").click();
  await frame.locator("//button[normalize-space()='Accetto']").click();
  await frame.locator("//button[normalize-space()='Medico']").click();
  await frame.locator("//button[normalize-space()='c']").click();
  
  await frame.locator("//button[normalize-space()='30-40']").click();
await frame.locator('(//button[@value="Cal_Start" and normalize-space(.)="c"])[1]').click();
        await frame.locator("//button[normalize-space()='Iniziamo!']").click();
          await frame.locator("//button[normalize-space()='1 gruppo']").click();
           await frame.locator("//button[normalize-space()='Quantitativa']").click();
              await frame.locator("//button[normalize-space()='Media']").click();
       await frame.locator("//button[normalize-space()='Progettazione']").click();
       await frame.locator("//button[normalize-space()='Confronto']").click();
       await frame.locator("//button[normalize-space()='Numerosità']").click();
       await frame.locator("//input[@placeholder='Inserisci un valore numerico']").last().fill("34");
await frame.locator("//img[@src='assets/images/send-icon.png']").last().click();

await frame.locator("//input[@placeholder='Inserisci un valore numerico']").last().fill("54");
await frame.locator("//img[@src='assets/images/send-icon.png']").last().click();
await frame.locator("//input[@placeholder='Inserisci un valore numerico']").last().fill("65");
await frame.locator("//img[@src='assets/images/send-icon.png']").last().click();
 await frame.locator("//div[@class='owl-item ng-tns-c556756694-5 ng-trigger ng-trigger-autoHeight active ng-star-inserted']//button[@value='G1_QNT_AVG_D_CTM_SS_HYP_DIV_Alpha'][normalize-space()='Seleziona']").click();
       await frame.locator("//button[normalize-space()='0.05']").click();
       await frame.locator("//button[normalize-space()='0.80']").click();
       await frame.locator("//button[normalize-space()='No']").click();
       await frame.locator("//button[@value='DOWNLOAD']").click();
       //await frame.locator("//button[normalize-space()='c']").click();
       //await frame.locator("//button[normalize-space()='c']").click();
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              






  

