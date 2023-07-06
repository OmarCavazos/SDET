const vidaEnemigo = 200;

// var randomNumber = Math.floor(Math.random() * 6) + 1;
/**
 * Regresa un número entre el 1 y el 6
 */

function tirarDado() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function golpe(resultadoDados) {
  let puntosDeDaño;
  console.log(resultadoDados)
  if (resultadoDados > 3) {
    puntosDeDaño = 60
  } else {
    puntosDeDaño = 20
  }
  /**
   * TU CODIGO AQUI!!!
   * Si al aventar los dados:
   * dados mayor a 3 = 60 puntos de daño
   * dados menor a 3 = 20 puntos de daño
  */
  return puntosDeDaño;
}
// console.log(golpe)


function patada(resultadoDados) {
  let puntosDeDaño;
  if (resultadoDados >= 5) {
    puntosDeDaño = 60
  } else if (resultadoDados == 3 || resultadoDados == 4) {
    puntosDeDaño = 40
  } else {
    puntosDeDaño = 20
  }
  /**
   * TU CODIGO AQUI!!!
   * Si al aventar los dados:
   * dados mayor o igal a 5 = 60 puntos de daño
   * dados con valor de 3 o 4 = 40 puntos de daño
   * dados menor o igual a 2 = 20 puntos de daño
   */

  return puntosDeDaño;
}
console.log(patada())

/**
 * El jugador puede atacar con una patada y un golpe por turno.
 * El jugador tiene 3 turnos para acabar con el oponente
 */

let dañoTotal = 0;

for (let turno = 0; turno < 3; turno++) {
  /**
   * TU CODIGO AQUI!!!'
   * crea dos variables, dado1 y dado2
   * asignales el resultado de tirarDado() a cada una
   * ejecuta la función de golpe() y patada(), utilizando los valores de dado1 y dado2
   * suma el daño generado durante los 3 turnos entre ambos ataques
   * imprime el daño por golpe, por patada y la suma por turno
  */

  dado1 = tirarDado()
  dado2 = tirarDado()
  let dañoGolpe = golpe(dado1)
  let dañoPatada = patada(dado2)
  let dañoTurno = dañoGolpe + dañoPatada
  dañoTotal = dañoTotal + dañoTurno
  
  console.log(`
  Dado1: ${dado1},
  Dado2: ${dado2},
  Golpe: ${dañoGolpe},
  Patada: ${dañoPatada},
  Daño Turno: ${dañoTurno}
  `);
}

console.log(dañoTotal)
console.log(vidaEnemigo)
console.log(dañoTotal)

const vidaRestante = vidaEnemigo - dañoTotal;
console.log(vidaRestante)

console.log(`
  Daño Total: ${dañoTotal}
  Vida Total: ${vidaEnemigo}
  Vida Restante: ${vidaRestante}
  `);

function Resultado(vidaRestante) {
  console.log(vidaRestante)
  if (vidaRestante <= 0) {
    return ("jugador gano")
  } else {
    return ("jugador perdio")
  }
}
console.log(Resultado(vidaRestante))

/**
 * Imprime el resultado de la batalla!
 * Después de 3 turnos, el jugador derrotó al enemigo?
 */
