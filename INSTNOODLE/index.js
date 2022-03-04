'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', data => { inputString += data });
process.stdin.on('end', () => {
    let inputValues = inputString.split(' ');
    let X = Number(inputValues[0]);
    let Y = Number(inputValues[1]);

    console.log(X * Y);
})