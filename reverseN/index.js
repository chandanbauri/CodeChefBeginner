'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', data => { inputString += data });

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n').map(item => item)
    for (let i = 1; i < inputValues.length - 1; i++){
        reverse(inputValues[i])
    }
})

const reverse = (val) => {
    let num = val.trim().split('').map(item => item);
    let numStr = ''
    let temp = num.reverse()
    for (let i = 0; i < temp.length; i++){
        numStr += temp[i]
    }
    console.log(numStr.replace(/^0+/, ''))
}