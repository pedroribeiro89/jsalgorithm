function runTest(e) {
	const problem = e.data['problem'];
	const parseTest = new Function('testCase', problem.parseTestCase);
	const testCase = parseTest(e.data['testCase']);

	if (testCase.includes('ERRO')) {
		postMessage({type: 'test', result: testCase});
	} else {
		try {
		  	let code = new Function(e.data['code'] + testCase);
		  	let result = code();
		  	postMessage({type: 'test', result:result});
		} catch(exception) {
		  	postMessage({type: 'test', result:'Exception: ' + exception});
		}
	}
}

function runSubmit(e) {
	const problem = e.data['problem'];
	const testCaseList = problem.testCases;
	const parseTest = new Function('testCase', problem.parseTestCase);
		
	let testCase;
	let code;
	let result;
	passedTests = 0;
	for (let i = 0; i < testCaseList.length; ++i) {
		testCase = parseTest(testCaseList[i]['test']);
		try {
			code = new Function(e.data['code'] + testCase);
			result = code();
		} catch(exception) {
			postMessage({type: 'submit', result:'Exception: ' + exception});
			i = testCaseList.length;
		}

		if (i < testCaseList.length) {
			if (result !== testCaseList[i]['result']) {
				postMessage({type: 'submit', result:'Erro no teste: ' + testCaseList[i]['test']});
				i = testCaseList.length;
			} else { ++passedTests; }
		}
	}
	if (testCaseList.length === passedTests) {
		postMessage({type: 'submit', result: 'OK'});
	}
}

onmessage = function(e) {
  if (e.data['type'] === 'test') {
  	runTest(e);
  } else if (e.data['type'] === 'submit') {
  	runSubmit(e);
  }
}