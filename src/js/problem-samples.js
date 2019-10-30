export const testProblems = {
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