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
		let sum = Sum(d,n);
		return sum; 
	}).join('\n');
	console.log(str);
})

const Sum = (d,n) => {
	if(d == 0)
		return 0;
	if(d == 1)
		return find_sum(n);
	return Sum(--d,find_sum(n));
}

const find_sum = (n) => {
	if(n == 1)
		return 1
	return n + find_sum(--n);
}


