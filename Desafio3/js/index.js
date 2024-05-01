let nombreProducto = 'Auricular Bluetooth'
let precioUnitario = 6000
let cantidadDeseada = parseInt(prompt('Ingrese la cantidad de ' + nombreProducto + 'que desea comprar:'))

let costoTotalSinDescuentos = precioUnitario * cantidadDeseada

if(cantidadDeseada <= 4){
    costoTotalSinDescuentos *= 0.9
}

alert(`El costo total es ${cantidadDeseada} ${nombreProducto} es: $${costoTotalSinDescuentos}`)