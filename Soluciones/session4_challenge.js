let libros = [
  {
    titulo: "Metro 2033",
    autor: "Unrusovsky",
    fecha: 2023,
    enStock: false,
  },
  {
    titulo: "Twilight",
    autor: "Unaemo",
    fecha: 2021,
    enStock: true,
  },
  {
    titulo: "Qiubole con las morras",
    autor: "Undios",
    fecha: 2020,
    enStock: false,
  },
];

function getTitulo(indice) {
  return libros[indice].titulo;
}

function addLibro(newLibro) {
  libros.push({
    titulo: newLibro.titulo,
    autor: newLibro.autor,
    fecha: newLibro.fecha,
    enStock: newLibro.enStock,
  });
}

function deleteBookByIndex(indice) {
  console.log("DELETED " + indice);
}

// Loop que imprima los nombres de los libros en orden
// -> Metro 2033, Twilight, Quiobole...
// getTitulo(indice)

for (const index in libros) {
  console.log(getTitulo(index));
}

// Loop borre los libros en orden reverso
// -> Quibole, Twilight, Metro
// c
// deleteBookByIndex(indice)

for (let index = libros.length; index > 0; index--) {
  deleteBookByIndex(index - 1);
}
