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
    
    let str = inputValues.splice(0, limit).map(item => {
        let temp = Number(item);
        let count = 0;
        for (let i = 11; i >= 0; i--){
            while (temp > 0 && temp >= Math.pow(2,i)) {
                temp -= Math.pow(2, i);
                count++;
            }
        }
        return count;
    }).join('\n');
    console.log(str)
})