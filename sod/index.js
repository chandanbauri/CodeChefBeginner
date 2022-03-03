'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8');

let t = 0;
let inputString = '';

process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n').map(item => item.trim());
    let t = inputValues[0];

    for (let i = 1; i <= t; i++) {
        let num = inputValues[i];
        find_digit(num)
    }
})

let find_digit = (num) => {
    let temp = parseInt(num)
    let sum = 0;
    while (temp >= 1) {
        let digit = parseInt(temp % 10)
        temp /= 10;
        sum += digit;
    }

    console.log(sum);
}