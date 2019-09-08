'use strict';

let foods = [{ 'name': 'drick', 'price': 200 },
{ 'name': 'coffe', 'price': 600 }
];

function funcReduce( sum , item ) {
    return sum + item.name;
}

let total = foods.reduce(funcReduce, 0 );

console.log(total);

function checkNumber(num) { //make logic to check num
    return num % 2 != 0; } 

function doubleNumber(num) {//make logic to check num
    return num * 2;
}

function doubleOddNumbers(oldNums) {
    return oldNums.filter(checkNumber).map(doubleNumber);
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7];

console.log(doubleOddNumbers(myNumbers)); 