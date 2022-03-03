'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8');

let t = 0;
let inputString = '';

process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n').map(item => item.trim())
    let t = inputValues[0];

    for (let i = 1; i <= t; i++) {
        find_fact(inputValues[i])
    }
})


const find_fact = (num) => {
    let temp = num.split('').map(item => parseInt(item.trim()));
    let temp2 = temp.reverse()
    
    
    while (num > 1) {
        let prod = [];
    let num2 = num - 1;
    
    let carry = 0;

    for (let i = 0; i < temp2.length; i++) {
        prod.push((carry + (temp2[i] * num2)) % 10)
        carry = parseInt((carry + (temp2[i] * num2)) / 10)
    }
    if (carry > 0) {
        carry.toString().split('').reverse().forEach(item => prod.push(parseInt(item)))
    }
    temp2 = prod;
    num--;
}

let factString = '';
for (let i = temp2.length -1; i >= 0; i--){
    factString += temp2[i].toString()
}

console.log(factString);

}