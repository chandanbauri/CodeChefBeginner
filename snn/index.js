'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = ''
let notes = [1, 2, 5, 10, 50, 100];

process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.trim().split('\n');
    let limit = Number(inputValues.splice(0, 1)[0])
    
    let str = inputValues.splice(0, limit).map(item => {
        let temp = Number(item);
        let count = 0;
        for (let i = 5; i >= 0; i--){
            while (temp > 0 && temp >= notes[i]) {
                temp -= notes[i];
                count++;
            }
        }
        return count
    }).join('\n');
    console.log(str)
})