'use strict';

//2.3.1 for 
function repeatStringNumTimesWithFor(str, num) {
  let result = '';

  for (let x = num; x > 0; x--) {
    result += str;
  }
  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

//2.3.2 while 
function repeatStringNumTimesWithWhile(str, num) {
  let result = '';
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

//2.3.3  do...while
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  if (num > 0) {
    do {
      num--;
      result += str;
    } while (num > 0);
    return result;
  }
  return '';
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', -2));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};