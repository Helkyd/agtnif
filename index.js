const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const {Builder,By,Key,until, WebElement} = require("selenium-webdriver");
//const { IWebDriver } = require("selenium-webdriver/lib/webdriver");
//var webdriver = require("selenium-webdriver"), By = webdriver.By, until = webdriver.until;

async function example(nifverificar)
{
	let driver = await new Builder().forBrowser("firefox").build();
	//Clear Cache before
	driver.manage().deleteAllCookies();

	//let driver = await new Builder().forBrowser("chrome").build();

	var nif = '9999999999';
	await driver.get("https://agt.minfin.gov.ao/PortalAGT/#!/servicos/consultar-nif/" + (nifverificar || nif));
	console.log('Carregou.');


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

}

//Ask for NIF other will not run
/*
rl.question("Digite o NIF a verificar:", function saveInput(nifverificar) {
	console.log(`NIF a verificar ${nifverificar} `);
	example(nifverificar);
});
*/
example('5417283657');