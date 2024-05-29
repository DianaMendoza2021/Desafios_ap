const productos = ["produc1","produc2","produc3","produc4"]

console.log(`Stock: ${productos.length}`)

for(let i = 0; i < productos.length; i ++){
    console.log("producto en indice="+i+"= " +productos[i])
}

console.log("---------")
let stock = productos.length
for(let i = 0; i < stock; i++){
    productos.pop()
    console.log(`Nuevo stock despues de la compra: ${productos.length}`)
    console.log("Productos disponibles: ")
    for (let index = 0; index < productos.length; index++) {
        console.log("Producto " + (index + 1)+":"+productos[index] );
    } 
}