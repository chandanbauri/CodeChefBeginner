'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n').map(item => item);
    let limit = Number(inputValues[0])

    let vals = inputValues.splice(1, limit).sort((a, b) => a - b)
    console.log(vals.join('\n'));
    
})