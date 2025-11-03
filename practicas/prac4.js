/*1. Tienes un arreglo de estudiantes con sus notas.
• Obtén un nuevo arreglo solo con los nombres.
• Filtra los que aprobaron (nota >= 6).
• Verifica si todos aprobaron.
• Suma las notas con .reduce().*/

const estudiantes = [
    { nombre: "Ana", nota: 7 },
    { nombre: "Luis", nota: 5 },
    { nombre: "Pedro", nota: 8 },
    { nombre: "Maria", nota: 6 },
];

const nombres = estudiantes.map(estudiante => estudiante.nombre);
const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 6);
const todosAprobaron = estudiantes.every(estudiante => estudiante.nota >= 6);
const sumaNotas = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.nota, 0);
console.log(nombres);
console.log(aprobados);
console.log(todosAprobaron);
console.log(sumaNotas);
/*2. Tienes un inventario con productos.
• Encuentra el producto con precio mayor a 100 usando .find().
• Encuentra el índice del producto “Laptop”.
• Verifica si hay algún producto agotado.
• Obtén un nuevo arreglo con el nombre y el precio con IVA (13%*/
const inventario = {
    productos: [
        { nombre: "Laptop", precio: 950, stock: 10 },
        { nombre: "Mouse", precio: 25, stock: 0 },
        { nombre: "Teclado", precio: 45, stock: 5 },
        { nombre: "Monitor", precio: 300, stock: 2 },
    ]
}
const productoCaro = inventario.productos.find(producto => producto.precio > 100);
const indiceLaptop = inventario.productos.findIndex(producto => producto.nombre === "Laptop");
const hayAgotado = inventario.productos.some(producto => producto.stock === 0);
const productosConIVA = inventario.productos.map(producto => ({
    nombre: producto.nombre,
    precioConIVA: producto.precio * 1.13
}));
console.log(productoCaro);
console.log(indiceLaptop);
console.log(hayAgotado);
console.log(productosConIVA);

/*3. Tienes resultados de una encuesta con puntuaciones del 1 al 10.
• Calcula el promedio con .reduce().
• Filtra los que dieron más de 8.
• Usa .forEach() para mostrar un mensaje con cada puntuación.*/
const encuesta = [7, 9, 5, 8, 10, 6, 4, 9];
const promedioEncuesta = encuesta.reduce((acumulador, puntuacion) => acumulador + puntuacion, 0) / encuesta.length;
const puntuacionesAltas = encuesta.filter(puntuacion => puntuacion > 8);
encuesta.forEach(puntuacion => {
    console.log(`Puntuación recibida: ${puntuacion}`);
});
console.log(promedioEncuesta);
console.log(puntuacionesAltas);
