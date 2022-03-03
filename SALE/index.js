'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', data => {
    inputString += data;
})


process.stdin.on('end', () => {
    let inputValues = inputString.split('\n');

    let limit = inputValues.splice(0, 1)[0];
    let str = inputValues.splice(0, limit).map(item => {
        let vals = item.split(' ');
        let X = Number(vals[0]);
        let Y = Number(vals[1]);
        let Z = Number(vals[2]);

        return X + Y + Z - (X < Y ? X < Z ? X : Z : Y < Z ? Y : Z);
    }).join('\n');
    console.log(str);
})

