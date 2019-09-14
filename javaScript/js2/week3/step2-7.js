//We declar here a primitive type
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
//We declare here an object that is a type of wraper class 
const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
