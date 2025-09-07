class CBLogin{

    constructor(page){
        this.page = page;
        this.clickpasswordbtn = page.locator("//button/span[contains(text(),' Use password')]")
        this.username = page.locator("//input[@name='username']")
        this.password = page.locator("//input[@name='password']")
        this.clickloginbtn = page.locator("//div[@class='d-flex flex-column']")
        this.createappbtn = page.locator("//button/span[contains(text(),'Create App')]")


    }

    async cblogin(){
        this.clickpasswordbtn.click()
        this.username.fill("Mithilesh@crowdbotics.com")
        this.password.fill("tester1000")
        this.clickloginbtn.click()

    }
}
export default CBLogin;