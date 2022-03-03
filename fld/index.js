'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let t = 0;
let inputString = '';


process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n').map(item => item.trim())
    t = inputValues[0];

    for (let i = 1; i <= t; i++){
        find_sum(inputValues[i]);
    }
})

let find_sum = (num) => {
    let temp = num.split('').map(item => item);
    let first = parseInt(temp[0]);
    let last = parseInt(temp[temp.length - 1]);
    console.log(first + last);
}