import { request } from "@playwright/test";

async function globalSetup(){
    console.log("Global Setup is started")

   const apicontext = await request.newContext()

   const links = [
        "https://playwright.dev",
               "https://www.google.com",
              "https://example.com/non-existent"
   ]

   for(let link of links)
   {
      const reponse = await apicontext.get(link)
      const status=await reponse.status()
      if(status >= 400)
      {
        console.log(`broken link: ${link} (status: ${status})`)
      }
      else{
        console.log(`working link is: ${link} (status: ${status})`)
      }
   }

   await apicontext.dispose()

   console.log("Global setup is completed")
}

export default globalSetup;