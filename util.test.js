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
test('should generate a valid text output', ()=>{
	const text = checkAndGenerate('Phil', 35)
	expect(text).toBe('Phil (35 years old)')
})
