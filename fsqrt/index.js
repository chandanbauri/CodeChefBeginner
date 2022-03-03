'use strict'
process.stdin.resume();
process.stdin.setEncoding('utf-8');

	let inputString = '';

process.stdin.on('data',data => {
	inputString += data;
});

process.stdin.on('end',() => {
	let inputValues = inputString.trim().split('\n');
	let limit = inputValues.splice(0,1)[0];
	let str = inputValues.map(item => {
		return  Math.floor(Math.sqrt(Number(item)));
	}).join('\n')
	console.log(str);
})
