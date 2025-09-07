import {test,chromium, request} from '@playwright/test'


test('broken links', async()=>{

    test.setTimeout(120000)
    const browser =await chromium.launch()
    const page =await browser.newPage()
    await page.goto("https://playwright.dev/")

    const links = await page.$$eval('a', as => as.map(a => a.href).filter(href => href.startsWith('http')))

   const apicontext = await request.newContext()

    for(let link of links)
    {
    try{
      const response = await apicontext.get(link, {timeout: 120000})
      const status= await response.status()
      if(status >= 400)
      {
        console.log(`Broken link is: ${link} (status: ${status})`)
      }
      else{
        console.log(`Working link is: ${link} (status: ${status})`)
      }
    }catch{
        console.log(`Error: Failed to fetch link ${link} (${error.message})`)
    }
}

    await apicontext.dispose()
})