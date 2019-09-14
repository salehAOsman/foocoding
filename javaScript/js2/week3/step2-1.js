'use strict';

function foo(func) {
    return "Hello"+func;
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
