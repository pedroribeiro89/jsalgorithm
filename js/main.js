const testProblems = {
	0: {
		startCode: 'function isGreaterThan(a, b) { if(a === null || b === null || isNaN(a) || isNaN(b)) { return null; } else { return a > b; } }',
		defaultTestCase: '1 2',
		title: 'Maior ou Menor?',
		description: 'Desenvolva a função isGreaterThan(a, b), que verifica se o valor \'a\' é maior que \'b\'. Retorne \'null\' caso não seja possível.',
		testDescription: 'O teste e feito digitando dois valores separados por um espaço. o primeiro é o valor de \"a\" e o segundo de \"b\"',
		testCases: [
				{test: '1 1', result: false},
				{test: '1 2', result: false},
				{test: '2 1', result: true},
				{test: '-2 1', result: false},
				{test: '1 -2', result: true},
				{test: '1.49 1.57', result: false},
				{test: '2.85 1.38', result: true},
				{test: '-2 null', result: null},
				{test: 'undefined -2', result: null},
				{test: '\'a\' 1', result: null}
		], 
		parseTestCase: 'var values = testCase.split(\' \'); return values.length !== 2 ? \'ERRO: TESTE FORA DO FORMATO\' : `return isGreaterThan(${values[0]}, ${values[1]});`;'
	}
};

class Problem {
	//parseTestCase parse the test case and generate a string invoking the code
	constructor(title, description, startCode, defaultTestCase, testDescription, testCases, parseTestCase) {
		this.title = title;
		this.description = description;
		this.startCode = startCode;
		this.defaultTestCase = defaultTestCase;
		this.testDescription = testDescription;
		this.testCases = testCases;
		this.parseTestCase = parseTestCase;
	}
}

const ERROR_BROWSER_WEBWORKERS_SUPORT = 'Seu browser não suporta WEB Workers';
const ERROR_LOAD_PROBLEM = 'Erro ao carregar o problema. Tente novamente mais tarde';

let problemObj = null;

// WORKER
let myWorker;

function receiveWorkerMsg(event) {
	let elementId = event.data['type'] === 'test' ? 'testResult' : 'submitionResult';
	document.getElementById(elementId).innerHTML = 'Resultado:' + event.data['result'];
}

function configureWorker() {
	if (window.Worker) {
		myWorker = new Worker("./js/worker.js");
		myWorker.onmessage = receiveWorkerMsg;
		return true;
	} else {
		return false;
	}
}

// TEST CODE
function testCode() {
	let code = document.getElementById('codeInputField').value;
	myWorker.postMessage({
		type: 'test',
		testCase: document.getElementById('testInputField').value,
		problem: problemObj,
		code: code
	});
}
function submitCode() {
	let code = document.getElementById('codeInputField').value;
	myWorker.postMessage({
		type: 'submit',
		problem: problemObj,
		code: code
	});
}

// CONFIGURE
function toggleLoadingMessage(showMsg) {
	document.getElementById('main-content').hidden = showMsg;
	document.getElementById('loading-message').hidden = !showMsg;
}

function setStartCode() {
	document.getElementById('codeInputField').value = problemObj.startCode;
}
function setDefaultTest() {
	document.getElementById('testInputField').value = problemObj.defaultTestCase;
}
function setProblemTitle() {
	document.getElementById('problemTitle').innerHTML = problemObj.title;
}
function setProblemDescription() {
	document.getElementById('problemDesc').innerHTML = problemObj.description;
}
function setProblemTestDesc() {  
	document.getElementById('problemTestDesc').innerHTML = problemObj.testDescription;
}
function configureBtns() {
	document.getElementById('resetTestBtn').onclick = setDefaultTest;
	document.getElementById('testBtn').onclick = testCode;
	document.getElementById('submitBtn').onclick = submitCode;
}
function showErrorMessage(message) {
	let pstyle = 'class=\"error-message\"';
	document.getElementById('main-content').innerHTML = `<p ${pstyle}>${message}</p>`;
}

// START
function configureComponents() {
	setStartCode();
	setDefaultTest();
	setProblemTitle();
	setProblemDescription();
	setProblemTestDesc();
	configureBtns();
}

function createProblemObj(problemJson) {
	problemObj = new Problem(
		problemJson['title'],
		problemJson['description'],
		problemJson['startCode'],
		problemJson['defaultTestCase'],
		problemJson['testDescription'],
		problemJson['testCases'],
		problemJson['parseTestCase']
	);
}

function simulateProblemRequest(testProblemsId = -1) {
	// simulate a http GET request to server. if testProblemsId < 0, simulates an error
	return new Promise((resolve, reject) => {
		setTimeout( function() {
		  if (testProblemsId < 0) {
		  	reject(ERROR_LOAD_PROBLEM);
		  } else {
		  	resolve(testProblems[testProblemsId]);
		  }
		}, 2000);
	});
}

function loadProblem() {
	toggleLoadingMessage(true);
	simulateProblemRequest(0).then(
		(problemJson) => {
			createProblemObj(problemJson);
			configureComponents();
			toggleLoadingMessage(false);
		},
		(error) => showErrorMessage(error)
	);
}

window.onload = function(e) {
	let browserSupport = configureWorker();
	if (browserSupport) {
		loadProblem();
	} else {
		showErrorMessage(ERROR_BROWSER_WEBWORKERS_SUPORT);
	}
}

