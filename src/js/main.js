import '../css/normalize.css';
import '../css/main.scss';

import './vendor/modernizr-3.7.1.min.js';
import './plugins.js';
import Worker from 'worker-loader!./worker.js';
import { Problem } from './problem.js';
import { testProblems } from './problem-samples.js';


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
		myWorker = new Worker();
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
	document.getElementById('main-content').hidden = showMsg  || problemObj === null;
	document.getElementById('main-problem-select').hidden = showMsg || problemObj !== null;
	document.getElementById('loading-message').hidden = !showMsg;
}

function goBack() {
	problemObj = null;
	toggleLoadingMessage(false);
}
 
function configureTable() {
	document.getElementById('problem0').onclick = () => {
		loadProblem(0);
	};
	document.getElementById('problem1').onclick = () => {
		loadProblem(1);
	};
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
	document.getElementById('goBackBtn').onclick = goBack;
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
		problemJson['parseTestCase'],
		problemJson['compareResult']
	);
}

function simulateProblemRequest(testProblemsId = -1) {
	// simulate a http GET request to server. if testProblemsId < 0, simulates an error
	return new Promise((resolve, reject) => {
		setTimeout( function() {
		  if (testProblemsId < 0 || testProblemsId > testProblems.length - 1) {
		  	reject(ERROR_LOAD_PROBLEM);
		  } else {
		  	resolve(testProblems[testProblemsId]);
		  }
		}, 2000);
	});
}

function loadProblem(testProblemsId) {
	toggleLoadingMessage(true);
	simulateProblemRequest(testProblemsId).then(
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
		// loadProblem();
		configureTable();
	} else {
		showErrorMessage(ERROR_BROWSER_WEBWORKERS_SUPORT);
	}
}

