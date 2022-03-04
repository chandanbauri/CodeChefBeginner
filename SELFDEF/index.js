'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', data => { inputString += data });
process.stdin.on('end', () => {
    let inputValues = inputString.split('\n');
    let limit = inputValues.splice(0, 1)[0];
    let str = inputValues.splice(0, limit * 2).map((item, index) => {
        if (index % 2 == 0)
            return '\n';
        let vals = item.split(' ');
        let N = vals.length;
        vals.forEach(women => {
            if (women < 10 || women > 60)
                N--;
        })
        return N
    }).splice(1).join('');
    console.log(str);
})