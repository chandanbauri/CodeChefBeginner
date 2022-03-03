'use strict'
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.trim().split('\n');
    let limit = Number(inputValues.splice(0, 1)[0]);

    let str = inputValues.splice(0, limit).map(item => {
        let vals = Number(item);
        return Math.floor(vals / 2 + 1)

    }).join('\n');

    console.log(str);
})
