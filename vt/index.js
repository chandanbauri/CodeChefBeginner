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
        let vals = item.split(' ');
        let a1 = Number(vals[0]);
        let a2 = Number(vals[1]);
        let a3 = Number(vals[2]);

        if ((a1 + a2 + a3) == 180)
            return 'YES'
        else
            return 'NO'
    }).join('\n');

    console.log(str);
})