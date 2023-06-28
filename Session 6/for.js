const array = [1, 2, 3, 4, 5];

// For Loop 1
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// For Loop 2
for (let index = array.length; index > 0; index--) {
  const element = array[index - 1];
  console.log(element);
}

// For In
const personas = [
  { name: "Pato", age: 25 },
  { name: "Rogelio", age: 32 },
  { name: "Luisa", age: 24 },
  { name: "Maria", age: 26 },
  { name: "Pedro", age: 17 },
];

for (const index in personas) {
  console.log(index);
  console.log(personas[index].name);
}

// For Of
for (const persona of personas) {
  console.log(persona);
  console.log(persona.age);
}
