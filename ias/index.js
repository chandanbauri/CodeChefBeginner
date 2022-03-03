'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = ''
let shipClass = {
    'b': 'BattleShip',
    'c': 'Cruiser',
    'd': 'Destroyer',
    'f': 'Frigate'
}
process.stdin.on('data', data => {
    inputString += data;
})

process.stdin.on('end', () => {
    let inputValues = inputString.trim().split('\n');
    let limit = Number(inputValues.splice(0, 1)[0])
    let str = inputValues.splice(0, limit).map(item => {
        let temp = item.trim().toLowerCase();
        return shipClass[temp];
    }).join('\n');
    console.log(str)
})