const puppeteer = require("puppeteer");
const {checkAndGenerate} = require("./util");
const {generateText} = require('./util');


// Unit tests
test('should output name and age', () => {
	const text = generateText('Phil', 35);
	expect(text).toBe('Phil (35 years old)')
	const text2 = generateText('Anna', 30);
	expect(text2).toBe('Anna (30 years old)')
})

test('should output data-less text', () => {
	const text = generateText('', null);
	expect(text).toBe(' (null years old)');
})


// Integration tests
test('should generate a valid text output', () => {
	const text = checkAndGenerate('Phil', 35)
	expect(text).toBe('Phil (35 years old)')
})


// End-to-End tests
test('should click around', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 80,
		args: ['--window-size=1920,1080']
	})
	// await the browser to create a new page
	const page = await browser.newPage();
	await page.goto(
		'file:///Users/phil/coding/jest/js-testing-introduction/index.html'
	)
	await page.click('input#name');
	await page.type('input#name', 'Phil');
	await page.click('input#age');
	await page.type('input#age', '35');
	await page.click('#btnAddUser');

	const finalText = await page.$eval('.user-item', el => el.textContent);
	expect(finalText).toBe('Phil (35 years old)');

}, 10000)
