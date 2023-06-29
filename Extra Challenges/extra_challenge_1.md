# Extra Challenge 1

Una escuela gringa necesita ayuda procesando calificaciones de formato númerico a calificación con letra. Nos han dado las siguientes equivalencias:

| Number Grade | Letter Grade |
| ------------ | ------------ |
| 100 - 90     | A            |
| 90 - 80      | B            |
| 80 - 70      | C            |
| 70 - 60      | D            |
| > 60         | F            |

La calificación mínima posible es de 0, la máxima es de 100, cualquier otra califiación debería arrojar un error.

Las calificaciones se reciben con un array, escribe una función que imprima cada una de las calificaciones, seguidas de su equivalente en Letra, como por ejemplo: `Grade 92 is equal to letter A`.

```
function gradeProcessor(grades) {
  // Tu código aquí
}

// Ejemplo
gradeProcessor([
    90, 95, 80, 96, 76, 74, 102, 86, 100, 67, 40, 88, 69, 70, -1, 98,
  ])
```
