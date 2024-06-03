let precioProducto = document.getElementById('precioProducto');
let titulo = document.querySelector('h1')
titulo.style.color = 'magenta'
setTimeout(()=>{
    precioProducto.innerText = 'Precio: $6500'
    precioProducto.style.color = 'red'
},1500)