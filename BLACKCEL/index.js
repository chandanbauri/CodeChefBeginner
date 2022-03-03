'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.trim();
    // let limit = inputValues.splice(0, 1)[0];
    let vals = Number(inputValues)
    let str = Math.floor((vals * vals) / 2)

    console.log(str);
})