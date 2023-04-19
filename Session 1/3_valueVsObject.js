// Declaration Example
function testFunction() {
  var a = {
    name: "Yotoko",
    lastname: "Turaja",
  }; // Global, can re-declare, can modify

  let b = {
    name: "Memo",
    lastname: "Hérdez",
  }; // Scoped, can't redeclare in scope, can modify

  const c = {
    name: "Yokero",
    lastname: "Tuchiko",
  }; // Scoped, can't redeclare in scope, can't modify base value

  //a.name = "A!"
  //b.name = "B!"
  //c.name = "C!"

  //a = 'a'
  //b = 'b'
  //c = 'c'

  console.log(a);
  console.log(b);
  console.log(c);
}

testFunction();
