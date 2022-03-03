'use strict'

process.stdin.resume();
process.stdin.setEncoding();

let inputString = '';

process.stdin.on('data',data => {inputString += data});
process.stdin.on('end',() => {
	let inputValues = inputString.split('\n');
	let limit = Number(inputValues.splice(0,1)[0]);
	let str = inputValues.splice(0,limit).map(item => {
		let vals = item.split(' ');
		let a = Number(vals[0]);
		let b = Number(vals[1]);
		let gcd = findGCD(a,b);
		let lcm = (a/gcd) * (b/gcd) * gcd;
		return `${gcd} ${lcm}`;
	}).join('\n');
	console.log(str);
})

const findGCD = (a,b) => {
	if(a < b) 
		return findGCD(b,a)
	else if(b == 0) 
		return a;
	else 
		return  findGCD(b,a%b);
}
