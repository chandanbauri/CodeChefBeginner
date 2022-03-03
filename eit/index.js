'user strict';

process.stdin.resume()
process.stdin.setEncoding('utf-8');

let n = k = 0;
let integerList = [];
let inputString = '';
process.stdin.on('data',data => {
    inputString += data
});

process.stdin.on('end', data => {
    let inputValues = inputString.split('\n').map(item => item.trim());
    let values = inputValues[0].split(' ').map(item => item.trim());
    n = parseInt(values[0]);
    k = parseInt(values[1]);
    let counter = 0;
    for (let i = 1; i <= n + 1; i++){
        if(parseInt(inputValues[i]) % k == 0){
            counter++;
        }
    }
    console.log(counter);
});