// Declaration Example
/*
var a = "A from outside"
let b = "B from outside"
const c = "C from outside"
*/

function testFunction() {
  var a = "a"; // Global, can re-declare, can modify
  let b = "b"; // Scoped, can't redeclare in scope, can modify
  const c = "c"; // Scoped, can't redeclare in scope, can't modify base value

  //var a = "new A"
  //let b = "new B"
  //const c = " new C"

  //a = "Modified A!"
  //b = "Modified B!"
  //c = "Modified C!"

  console.log(a);
  console.log(b);
  console.log(c);
}

/*
console.log(a)
console.log(b)
console.log(c)
*/

testFunction();
