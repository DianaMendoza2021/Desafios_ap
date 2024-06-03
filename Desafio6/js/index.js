let producto = {
    nombre: 'Auriculares',
    precio: 6000,
    stock: 5
}

producto.nombre = "Reloj"

producto.categoria = "Smartwatch"

delete producto.stock
console.log(producto)