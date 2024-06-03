const productos = ["prod1", "prod2", "prod3", "prod4", "prod5"]

for(let prod of productos){
    let h2 = document.createElement('h2');
    h2.innerHTML = `<p>Nombre: <span style="color:red"> ${prod} </span> </p>`
    document.body.appendChild(h2)
}