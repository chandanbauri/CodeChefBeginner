'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.split(' ');
    let R = Number(inputValues[0]);
    let O = Number(inputValues[1]);
    let C = Number(inputValues[2]);

    let str = R < (((20 - O) * 36) + C) ? 'YES' : 'NO'
    
    console.log(str);
})