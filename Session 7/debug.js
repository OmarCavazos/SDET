const calificaciones = [
  {
    nombre: "Alex",
    resultados: {
      matematicas: [55, 86, 77],
      ingles: [95, 66, 87],
      ciencias: [44, 56, 88],
    },
  },
  {
    nombre: "Mayra",
    resultados: {
      matematicas: [20, 80, 67],
      ingles: [94, 28, 48],
      ciencias: [76, 90, 88],
    },
  },
  {
    nombre: "Gera",
    resultados: {
      matematicas: [77, 86, 97],
      //      ingles: [66, 75, 87],
      ciencias: [46, 98, 77],
    },
  },
  {
    nombre: "David",
    resultados: {
      matematicas: [67, 88, 96],
      ingles: [97, 66, 88],
      ciencias: [56, 88, 97],
    },
  },
  {
    nombre: "Pato",
    resultados: {
      matematicas: [99, 100, 99],
      ingles: [100, 100, 101],
      ciencias: [100, 200, 100],
    },
  },
];

function promedio(arreglo) {
  const valorInicial = 0;
  const cantidadNumeros = arreglo.length;
  const sumaArreglo = arreglo.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    valorInicial
  );
  const resultado = sumaArreglo / cantidadNumeros;
  return resultado;
}

function obtenerPromediosPorMateria(calificacion) {
  const _promedioMatematicas = promedio(calificacion.resultados.matematicas);
  const _promedioIngles = promedio(calificacion.resultados.ingles);
  const _promedioCiencias = promedio(calificacion.resultados.ciencias);

  return {
    matematicas: _promedioMatematicas,
    ingles: _promedioIngles,
    ciencias: _promedioCiencias,
  };
}

function aprobado(calificacion) {
  return calificacion > 60;
}

let estudiantesProcesados = 0;

for (const calificacion of calificaciones) {
  try {
    const nombre = calificacion.nombre;
    const promedios = obtenerPromediosPorMateria(calificacion);
    const promedioFinal = promedio([
      promedios.matematicas,
      promedios.ingles,
      promedios.ciencias,
    ]);

    console.log(`
  Nombre del Alumno: ${nombre}
  ------------------------------------
    Materia  |  Resultado  |  Aprobado
    ----------------------------------
    Matematicas - ${promedios.matematicas.toFixed()} - ${
      aprobado(promedios.matematicas) ? "Aprobado" : "No Aprobado"
    }
    Ingles - ${promedios.ingles.toFixed()} -  ${
      aprobado(promedios.ingles) ? "Aprobado" : "No Aprobado"
    }
    Ciencias - ${promedios.ciencias.toFixed()} -  ${
      aprobado(promedios.ciencias) ? "Aprobado" : "No Aprobado"
    }
    ----------------------------------
    Total: ${promedioFinal.toFixed()} - ${
      aprobado(promedioFinal) ? "Aprobado" : "No Aprobado"
    }
  `);
  } catch (error) {
    console.log(
      "Encontramos un error generando el reporte de el alumno '" +
        calificacion.nombre +
        "', continuando... El error fue: " +
        error
    );
  } finally {
    estudiantesProcesados = estudiantesProcesados + 1;
  }
}

console.log("Se procesaron " + estudiantesProcesados + " estudiantes.");
