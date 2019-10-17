var problemObj = {
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


// WORKER
var myWorker;

function receiveWorkerMsg(event) {
	var elementId = event.data['type'] === 'test' ? 'testResult' : 'submitionResult';
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
	var code = document.getElementById('codeInputField').value;
	myWorker.postMessage({
		type: 'test',
		testCase: document.getElementById('testInputField').value,
		parseTestCase: problemObj.parseTestCase,
		code: code
	});
}
function submitCode() {
	var code = document.getElementById('codeInputField').value;
	myWorker.postMessage({
		type: 'submit',
		testCases: problemObj.testCases,
		parseTestCase: problemObj.parseTestCase,
		code: code
	});
}

// CONFIGURE
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
function showBrowserSupportErrorMessage() {
	document.getElementById('main-content').innerHTML = '<p>Seu browser não suporta WEB Workers</p>';
}

// START
window.onload = function(e) {
	var browserSupport = configureWorker();
	if (browserSupport) {
		setStartCode();
		setDefaultTest();
		setProblemTitle();
		setProblemDescription();
	    setProblemTestDesc();
		configureBtns();
	} else {
		showBrowserSupportErrorMessage();
	}
}

