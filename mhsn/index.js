'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = ''

process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.trim().split('\n');
    let limit = Number(inputValues.splice(0, 1)[0])
    let even = 0;
    let odd = 0;
    inputValues.splice(0, limit).forEach(item => {
        let val = Number(item)
        if (val % 2 == 0)
            even++;
        else
            odd++;
    })
    let str = even > odd ? 'READY FOR BATTLE' : 'NOT READY';
    console.log(str)
})