'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', (data) => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n');
    let limit = Number(inputValues.splice(0, 1)[0]);

    let str = inputValues.splice(0, limit).map(item => {
        let vals = item.split(' ');
        let A = Number(vals[0]);
        let B = Number(vals[1]);
        let C = Number(vals[2]);
        return C <= ((B * 3) - (A - B)) ? 'PASS' : 'FAIL';
    }).join('\n');
    console.log(str);
})