/* We have populated the solutions for the 10 easiest problems for your support.*/
/* Click on the SUBMIT button to make a submission to this problem.*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    // inputString = inputString.split(' ').map(string => {
    //     return string.trim();
    // });
    // console.log(inputString);
    // main();

    let inputValues = inputString.split('\n').map(item => item);
    let testCases = inputValues[0];
    for (let i = 1; i <= testCases; i++){
        let currentCase = inputValues[i].split(' ').map(item => item.trim());
        main(currentCase[0],currentCase[1])
    }
});

function readLine() {
    return inputString[currentLine++];
}

function main(withdrawalAmout , balance) {
    // input in nodeJs
    let withdrawal = parseFloat(withdrawalAmout, 10);
    let currentBal = parseFloat(balance, 10);
    if (withdrawal % 5 === 0 && withdrawal + 0.5 <= currentBal) {
        console.log((currentBal - withdrawal - 0.5).toPrecision(10));
    }
    else {
        console.log((currentBal).toPrecision(10));
    }
}
