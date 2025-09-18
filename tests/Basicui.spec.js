const { test,expect } = require('@playwright/test');


test("basic test100", async function ({page}) {
  expect(34).toBe(12)

})
    

test("basic test 101", async function ({page}) {
 expect(34).toBe(34) 
}) 

test("basic test 102", async function ({page}) {
  expect("anil").toBe("anil") 
}) 
    