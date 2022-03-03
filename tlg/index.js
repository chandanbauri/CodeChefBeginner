'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let w = 1;
let lead = 0;
let s1 = 0;
let s2 = 0;

process.stdin.on('data', data => {
    inputString += data;
});

process.stdin.on('end', () => {
    let inputValues = inputString.split('\n');
    let limit = inputValues.splice(0, 1)[0];
    inputValues.splice(0, limit).forEach(item => {
        let vals = item.split(' ');
        s1 += Number(vals[0]);
        s2 += Number(vals[1]);
        if ((s1 - s2) > 0 && lead < (s1 - s2)) {
            w = 1;
            lead = s1 - s2;
        } else if((s2 - s1) > 0 && lead < (s2 - s1)) {
            w = 2;
            lead = s2 - s1;
        }
    })
    console.log(w, lead)
})