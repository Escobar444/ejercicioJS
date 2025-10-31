/*Ejercicio: Inventario del Héroe
Se tiene el siguiente array de objetos:
let inventario = [
 { nombre: "Espada", precio: 100, cantidad: 1 },
 { nombre: "Poción", precio: 30, cantidad: 3 },
 { nombre: "Escudo", precio: 80, cantidad: 1 }
]; */


let inventario = [
 { nombre: "Espada", precio: 100, cantidad: 1 },
 { nombre: "Poción", precio: 30, cantidad: 3 },
 { nombre: "Escudo", precio: 80, cantidad: 1 }
];

//1
inventario.forEach(item => {
    console.log(`${item.nombre} - Precio: ${item.precio} - Cantidad: ${item.cantidad}`);
});

//2
inventario.push({ nombre: "Arco", precio: 120, cantidad: 1 });

//3
inventario.pop();

//4
const itemsFiltrados = inventario.filter(item => item.precio > 50);
console.log("Items con precio mayor a 50:");
itemsFiltrados.forEach(item => {
    console.log(`${item.nombre} - Precio: ${item.precio} - Cantidad: ${item.cantidad}`);
});

//5
const nombresItems = inventario.map(item => item.nombre);
console.log("Nombres de los items:");
console.log(nombresItems.join(", "));
//6
const existeItemCaro = inventario.some(item => item.precio > 100);
console.log("¿Existe algún item con precio mayor a 100?", existeItemCaro);
//7
const todosConCantidad = inventario.every(item => item.cantidad > 0);
console.log("¿Todos los items tienen cantidad mayor a 0?", todosConCantidad);

//8
const valorTotal = inventario.reduce((total, item) => total + (item.precio * item.cantidad), 0);
console.log("Valor total del inventario:", valorTotal);
