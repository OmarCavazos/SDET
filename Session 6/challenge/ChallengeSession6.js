let inventario = []

function agregarItem(nombre, cantidad, precio) {
    inventario.push({
        nombre: nombre, cantidad: cantidad, precio: precio 
    });
}


// Agrega elementos al inventario
agregarItem("Manzana", 10, 0.5);
agregarItem("Plátano", 5, 0.3);
agregarItem("Naranja", 8, 0.4);

console.log(inventario)



// Verifica el inventario
function verificarInventario() {
    console.log("Inventario: ");
    inventario.forEach(function(item) {
        console.log("-" + item.nombre + ": " + item.cantidad + "(Precio: $" + item.precio + ")");
    });
}
verificarInventario(console.log(inventario))


// Resultado:
// Inventario:
// - Manzana: 10 (Precio: $0.5)
// - Plátano: 5 (Precio: $0.3)
// - Naranja: 8 (Precio: $0.4)

// Elimina un elemento del inventario
function eliminarItem(Index) {
    inventario.splice(Index, 1);
    console.log("elemento eliminado con exito")
}
eliminarItem(1);


// Verifica el inventario nuevamente
verificarInventario(console.log(inventario))


// Resultado:
// Inventario:
// - Manzana: 10 (Precio: $0.5)
// - Naranja: 8 (Precio: $0.4)*/