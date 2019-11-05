export const testProblems = {
	0: {
		startCode: 
		`function isGreaterThan(a, b) { 
			if(a === null || b === null || isNaN(a) || isNaN(b)) { return null; } 
			else { return a > b; } 
		}`,
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
		parseTestCase: 'var values = testCase.split(\' \'); return values.length !== 2 ? \'ERRO: TESTE FORA DO FORMATO\' : `return isGreaterThan(${values[0]}, ${values[1]});`;',
		compareResult: `return a === b;`
	},
	1: {
		startCode: 
			`	function swap(array, i, j) {
		var aux = array[i];
		array[i] = array[j];
		array[j] = aux;
	}

function partition(array, init, end) {
		var pivotValue = array[end];
		var i = init;
		for (var j = init; j < end ; ++j){
			if (array[j]  < pivotValue) {
				swap(array, i, j);
				++i;
			}
		}
		if (pivotValue < array[i]) {
			swap(array, i, end);
		}
		return i;
	}

function quicksort(array, init, end) {
         if (init < end) {
	      var pivotPosition = partition(array, init, end);
	      quicksort(array, init, pivotPosition-1);
	      quicksort(array, pivotPosition+1, end);
	}
	return array;
}

function sortArray(myArray) {
     return quicksort(myArray, 0, myArray.length-1);
}`,
		defaultTestCase: '2 3 6 8 1 10',
		title: 'Números em ordem',
		description: 'Desenvolva a função sortArray(myArray), que retorna o array ordenado.',
		testDescription: 'O teste e feito digitando a lista de valores numéricos separados por espaço',
		testCases: [
			{test: '1', result: [1]},
			{test: '1 2 3 4 5', result: [1, 2, 3, 4, 5]},
			{test: '3 2 10 8 1 6', result: [ 1, 2, 3, 6, 8, 10]},
			{
				test: '14 15 17 47 30 42 33 34 1 26 24 27 21 31 35 28 36 43 2 12 22 45 50 23 3 29 18 11 32 41 4 44 48 25 5 20 6 49 7 46 16 13 8 37 9 38 39 10 19 40', 
				result: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
					11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
					21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
					31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
					41, 42, 43, 44, 45, 46, 47, 48, 49, 50]},
		], 
		parseTestCase: 'var array = testCase.split(\' \'); var parsedArray = array.map(Number); return array.includes(\'\') ? \'ERRO: TESTE FORA DO FORMATO\' : `return sortArray([${[...parsedArray]}]);`;',
		compareResult: `
			if (a.length !== b.length) { return false; }
			for (let i = 0; i < a.length; ++i) {
				if (a[i] !== b[i]) { return false; }
			}
			return true;
		`
	}
};