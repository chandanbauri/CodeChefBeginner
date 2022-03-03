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
        if (temp == 1)
            return 'no';
        let flag = true;
        for (let i = 2; i < Math.sqrt(temp); i++){
            if (temp % i == 0) {
                flag = false;
                break;
            }
        }
        return flag ? 'yes' : 'no'
    }).join('\n');
    console.log(str)
})