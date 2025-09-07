import{test,expect} from '@playwright/test'
import CBLogin from '../pages/CBLoginPage.js'

test('CB Login', async({page})=>{

  const cbtestlogin = new CBLogin(page)
  await page.goto("https://qa-test-hub.crowdbotics.com/dashboard/accounts/login")
  await cbtestlogin.cblogin()
  await expect(cbtestlogin.createappbtn).toBeVisible()


})