'use strict'
process.stdin.resume()
process.stdin.setEncoding()

let inputString = '';

process.stdin.on('data', data => {
    inputString += data
})

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n');
    let limit = Number(inputValues.splice(0, 1)[0])
    let str = inputValues.splice(0, limit).map(item => {
        let vals = item.split(' ');
        let s1 = Number(vals[0]);
        let s2 = Number(vals[1]);
        if (s1 > s2) return '>'
        else if (s1 == s2) return '='
        else return '<'
    }).join('\n');

    console.log(str);
})