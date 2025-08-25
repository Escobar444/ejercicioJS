//Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un numero:", (num) => {
    const numero = Number(num);
    const cuadrado = numero * numero;
    const raizCuadrada = Math.sqrt(numero);
    console.log(`El cuadrado de ${numero} es ${cuadrado}`);
    console.log(`La raíz cuadrada de ${numero} es ${raizCuadrada}`);

//2.	Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio.
rl.question("Ingrese un numero para el sorteo (0-29):", (sorteo) => {
    const NumeroSorteo = Number(sorteo);
    const numAleatorio = Math.floor(Math.random() * 29);
    console.log(`El número aleatorio generado es: ${numAleatorio}`);
    

//3.	Una tienda de electrodomésticos necesita encontrar 
// el precio más barato y el más caro de
//  su lista de precios: [30, 52, 35, 1, 12, -3].
rl.question("Ingrese una lista de precios separados por comas:", (precios) => {
    const Nprecios = precios.split(",").map(Number);
    const precioMinimo = Math.min(...Nprecios);
    const precioMaximo = Math.max(...Nprecios);
    console.log(`El precio más barato es: ${precioMinimo}`);
    console.log(`El precio más caro es: ${precioMaximo}`);

//4.	Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de habitaciones en el que se encuentra (ejemplo: habitación 25). El programa debe calcular y mostrar en qué piso está. Deberá pedir el número de la habitación, dividir el número de habitaciones entre 10 y redondear hacia arriba y mostrar el piso correspondiente.
    rl.question("Ingrese el número de habitación:", (habitacion) => {
        const numHabitacion = Number(habitacion);
        const piso = Math.ceil(numHabitacion / 10);
        console.log(`La habitación ${numHabitacion} está en el piso ${piso}`);
        rl.close();
    });
})
})
})