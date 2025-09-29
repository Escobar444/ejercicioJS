const carrito = [];

const producto = {
    nombre: "camiseta",
    precio: 2.5
}

carrito.push(producto)
console.log(carrito);  

const producto2 = {
    nombre: "zapatos",
    precio: 12.5
}

carrito.unshift(producto2);
console.log(carrito);