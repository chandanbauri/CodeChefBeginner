'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data',data => {inputString += data});
process.stdin.on('end',() => {
	let inputValues = inputString.split('\n');
	let limit = Number(inputValues.splice(0,1)[0]);
	let str = inputValues.splice(0,limit).map(item => {
		let vals = item.split(' ');
		let d = Number(vals[0]);
		let n = Number(vals[1]);
		return find_expenses(d,n).toFixed(5);
	}).join('\n');
	console.log(str);
})

const find_expenses = (q,p) => {
	if(q > 1000)
		return  (q*p) - (((q*p) * 10)/100);
	return q*p
}

