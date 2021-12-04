const {Builder,By,Key,until, WebElement} = require("selenium-webdriver");
//const { IWebDriver } = require("selenium-webdriver/lib/webdriver");
//var webdriver = require("selenium-webdriver"), By = webdriver.By, until = webdriver.until;

async function example()
{
	let driver = await new Builder().forBrowser("firefox").build();
	//let driver = await new Builder().forBrowser("chrome").build();

	//let driver = await new webdriver.Builder().forBrowser("firefox").build();
	await driver.get("https://agt.minfin.gov.ao/PortalAGT/#!/servicos/consultar-nif/5417283657");
	console.log('Carregou.');


	//var tt = driver.findElement(By.xpath("//*[text()='CONSULTAR']"));
	//console.log(tt.Enabled);
	/*
	await driver.findElement(By.xpath("//*[text()='CONSULTAR']")).then(found => {
		console.log('Botao found.');
		//console.log(await found.getText());
		//console.log(found.get_property("disabled"));
		
		//driver.findElement(By.id("test")).click()
	}, error => {
		if (error instanceof webdriver.error.NoSuchElementError) {
		  console.log('Element not found.');
		}
	});	
	*/
	//console.log(await driver.getTitle());
	//await driver.switchTo().frame(driver.findElement(By.tagName('iframe')));
	/*
	await driver.switchTo().frame(driver.findElement(By.tagName('iframe'))).then(found => {
		console.log('Iframe found.');
		click();
		//driver.findElement(By.id("test")).click()
	}, error => {
		if (error instanceof webdriver.error.NoSuchElementError) {
		  console.log('iFRAME not found.');
		}
	});	
	*/
	await driver.switchTo().frame(driver.findElement(By.tagName('iframe')).click()).then(found =>{
		console.log('Fez Clique.');
		/*
		let tt =  driver.findElement(By.xpath("//*[text()='CONSULTAR']")); // By.xpath("//*[text()='CONSULTAR']");
		//await driver.wait(until.elementIsEnabled(tt));
		driver.wait(until.elementIsEnabled(tt)).then(found => {
			console.log('Botao activo.');
			driver.sleep(1000);
			tt.click();
	
		}, error => {
			if (error instanceof webdriver.error.NoSuchElementError) {
			  console.log('Element not found.');
			}
		});	
		*/
	});
	
	//console.log('Fez Clique.');
	//await driver.WebDriverWait(driver, 20).until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.name("iframe")));


	//await driver.switchTo().frame(driver.findElement(By.tagName('iframe')).getWebElement());

	//Click now the Button btn ng-binding
	//driver.switchTo().defaultContent();
	//driver.wait(until.elementIsVisible(By.className('btn ng-binding')), 10000);	
	//driver.wait(until.elementLocated(By.className('btn ng-binding'), 10000));

	//var query = driver.wait(driver.findElement(By.className('btn ng-binding')).until.elementLocated(By.name('q')));
	
	//const button = driver.wait(  until.elementLocated(By.id('my-button')),   20000);

	//let elem = await $('#btn.ng-binding');
	//let isDisplayed = await elem.isDisplayed();
    //console.log(isDisplayed); // outputs: false
	
	//driver.sleep(1000);
	//WebElement clique = driver.findElement(By.xpath(""))
	//console.log(By.xpath("//button[contains(text),'CONSULTAR')]"));
	//driver.findElementsByXPath("//button[contains(text(),'CONSULTAR')]");
	//driver.findElement(By.xpath("//button[contains(text(),'CONSULTAR')]"));
	//await driver.findElement(By.xpath("//button[text()='CONSULTAR']"));
	//var tt = await driver.findElement(By.xpath("//button[text()='CONSULTAR']"));
	
	//console.log(await tt.getText());
	//console.log(await tt.Enabled);
	
	//console.log(await driver.findElement(By.className('btn ng-binding')));
	
	//await driver.findElement(By.className('btn ng-binding')).click();
	//console.log(await driver.findElement(By.className('btn ng-binding')));
	//console.log(await driver.By.frame(0));

	//await driver.frameToBeAvailableAndSwitchToIt(By.name("iframe"));
	//wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.name("iframe")));
	//await driver.WebDriverWait(driver, 20).until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.name("iframe")));

	
	//FUNCIONA
	let tt = await driver.findElement(By.xpath("//*[text()='CONSULTAR']")); // By.xpath("//*[text()='CONSULTAR']");
	//await driver.wait(until.elementIsEnabled(tt));
	await driver.wait(until.elementIsEnabled(tt)).then(found => {
		console.log('Botao activo.');
		tt.click();

	}, error => {
		if (error instanceof webdriver.error.NoSuchElementError) {
		  console.log('Element not found.');
		}
	});	
	

    //new WebDriverWait(driver, 20).until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.name("iframe")));

	//await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
}
example();
