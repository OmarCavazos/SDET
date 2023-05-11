// ----- ***** ----- //
let contador = 0;

while (contador <= 5) {
  console.log("Contador: " + contador);
  contador = contador + 1;
}
// ----- ***** ----- //

let evaluacion = false;
contador = 0;

while (!evaluacion) {
  console.log("Evaluacion: " + evaluacion);
  contador = contador + 1;
  if (contador == 5) {
    evaluacion = true;
  }
}
// ----- ***** ----- //
evaluacion = false;
contador = 0;

do {
  console.log("evaluacion: " + evaluacion);
  contador = contador + 1;
  if (contador == 5) {
    evaluacion = true;
  }
} while (!evaluacion);
