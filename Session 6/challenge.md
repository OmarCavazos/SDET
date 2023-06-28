# Session 5 Challenge

## Gestión de Inventario de una Tienda

### Descripción:

Se te ha encargado crear un sistema simple de gestión de inventario para una tienda. El sistema debe permitir a los usuarios agregar elementos al inventario, eliminar elementos del inventario y verificar el estado actual del inventario.

### Instrucciones:

- Crea un array vacío llamado `inventario`.

- Implementa una función llamada `agregarItem` que tome tres parámetros: `nombre, cantidad y precio`. Esta función debe crear un objeto que represente un elemento con propiedades para `nombre, cantidad y precio`. La función debe agregar el objeto del elemento al array inventario.

- Implementa una función llamada `eliminarItem` que tome un parámetro `nombre`. Esta función debe eliminar el elemento con el nombre dado del array inventario. Si el elemento no se encuentra en el inventario, mostrar un mensaje de error.

- Implementa una función llamada `verificarInventario` que no tome parámetros. Esta función debe mostrar el estado actual del inventario recorriendo el array inventario e imprimiendo los detalles de cada elemento (`nombre, cantidad y precio`).

Prueba tu código agregando, eliminando y verificando el inventario en diferentes escenarios.

Ejemplo de Uso:

```js
// Agrega elementos al inventario
agregarItem("Manzana", 10, 0.5);
agregarItem("Plátano", 5, 0.3);
agregarItem("Naranja", 8, 0.4);

// Verifica el inventario
verificarInventario();
// Resultado:
// Inventario:
// - Manzana: 10 (Precio: $0.5)
// - Plátano: 5 (Precio: $0.3)
// - Naranja: 8 (Precio: $0.4)

// Elimina un elemento del inventario
eliminarItem("Plátano");

// Verifica el inventario nuevamente
verificarInventario();
// Resultado:
// Inventario:
// - Manzana: 10 (Precio: $0.5)
// - Naranja: 8 (Precio: $0.4)
```
