'use strict';

function doubleOddNumbers(oldNums) {
    const newNums = [];
    oldNums.filter(x => x % 2 !== 0).map( x =>  newNums.push(x * 2) );
    return newNums;
    
}

const myNumbers = [1, 2, 4, 5, 7];

console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]