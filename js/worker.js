function runTest(e) {
	var parseTest = new Function('testCase', e.data['parseTestCase']);
	var testCase = parseTest(e.data['testCase']);

	if (testCase.includes('ERRO')) {
		postMessage({type: 'test', result: testCase});
	} else {
		try {
		  	var code = new Function(e.data['code'] + testCase);
		  	try {
		  		var result = code();
		  		postMessage({type: 'test', result:result});
		  	} catch(runtimeException) {
		  		postMessage({type: 'test', result:'Runtime Exception: ' + runtimeException});
		  	}
		} catch(syntaxException) {
		  	postMessage({type: 'test', result:'Syntax Exception: ' + syntaxException});
		}
	}
}

function runSubmit(e) {
	try {
		var codeStr = e.data['code'];
		var testCaseList = e.data['testCases'];
		var parseTest = new Function('testCase', e.data['parseTestCase']);
		try {
			var testCase;
			var code;
			var result;
			passedTests = 0;
			for (i = 0; i < testCaseList.length; ++i) {
				testCase = parseTest(testCaseList[i]['test']);
				code = new Function(e.data['code'] + testCase);
				result = code();
				if (result !== testCaseList[i]['result']) {
					postMessage({type: 'submit', result:'Erro no teste: ' + testCaseList[i]['test']});
					i = testCaseList.length;
				} else {++passedTests;}
			}
		  	if (testCaseList.length === passedTests) {
				postMessage({type: 'submit', result: 'OK'});
		  	}
		} catch(runtimeException) {
			postMessage({type: 'submit', result:'Runtime Exception: ' + runtimeException});
		}
	} catch(syntaxException) {
		postMessage({type: 'submit', result:'Syntax Exception: ' + syntaxException});
	}
}

onmessage = function(e) {
  if (e.data['type'] === 'test') {
  	runTest(e);
  } else if (e.data['type'] === 'submit') {
  	runSubmit(e);
  }
}