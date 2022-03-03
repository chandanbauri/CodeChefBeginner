'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', data => {
    inputString += data;
})

const max = (a, b) => a < b ? b : a;

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n');

    let limit = inputValues.splice(0, 1)[0];
    let str = inputValues.splice(0, limit).map(item => {
        let vals = item.split(' ');
        let X1 = Number(vals[0]);
        let Y1 = Number(vals[1]);
        let X2 = Number(vals[2]);
        let Y2 = Number(vals[3]);
        let s1 = X1 - X2;
        let s2 = Y1 - Y2;
        return max(s1 < 0 ? (0 - s1) : s1, s2 < 0 ? (0 - s2) : s2);
    }).join('\n');
    console.log(str);
})

