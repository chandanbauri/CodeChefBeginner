'use strict'
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.trim().split('\n');

    let str = inputValues.map(item => {
        let vals = Number(item);
        if ((vals) % 4 == 0) {
            return ++vals;
        }
        return --vals;

    }).join('\n');

    console.log(str);
})
