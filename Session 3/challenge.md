Tomando en cuenta este arreglo:
```
const books = [
    {
        titulo: "Metro 2033",
        autor: "Unrusovsky",
        fecha: 2023,
        enStock: false
    },
    {
        titulo: "Twilight",
        autor: "Unaemo",
        fecha: 2021,
        enStock: true
    },
    {
        titulo: "Qiubole con las morras",
        autor: "Undios",
        fecha: 2020,
        enStock: false
    }
]
```
Generar los siguientes métodos:

- **getBook** - Recibe un índice, y regresa el título del libro correspondiente
- **addBook** - Recibe un objeto con titulo, nombre, autor, fecha, y existencia en stock, y lo agrega al arreglo.
- **deleteBook** - Recibe un índice y borra dicho libro del arreglo