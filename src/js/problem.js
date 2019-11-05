export class Problem {
	//parseTestCase parse the test case and generate a string invoking the code
	constructor(title, description, startCode, defaultTestCase, testDescription, testCases, parseTestCase, compareResult) {
		this.title = title;
		this.description = description;
		this.startCode = startCode;
		this.defaultTestCase = defaultTestCase;
		this.testDescription = testDescription;
		this.testCases = testCases;
		this.parseTestCase = parseTestCase;
		this.compareResult = compareResult;
	}
}