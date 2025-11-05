/*Solicitar al usuario una contraseña y verificar si esta es correcta o no */

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contraseñaCorrecta = "admin123";
let mensaje;

rl.question("ingrese la contraseña:", (contraseñaUsuario) => {
    if (contraseñaUsuario === contraseñaCorrecta) {
        mensaje = "Contraseña correcta.";
    } else {
        mensaje = "Contraseña incorrecta.";
    }
    console.log(mensaje);



/*Solicitar al usuario un número y determinar si este es un numero positivo o negativo */
let mensajeNum;
rl.question("Ingrese un número:", (numero) => {
    if (numero > 0) {
        mensajeNum = "El número es positivo.";
    } else if (numero < 0) {
        mensajeNum = "El número es negativo.";
    } else {
        mensajeNum = "El número es cero.";
    }
    console.log(mensajeNum);


/* Calcular el descuento según el monto de compra: solicite el monto de la compra y aplique un descuento:
-          Mayor o igual a 100 -> 10%

-          Entre 50 y 99 -> 5%

-          Menor a 50 -> sin descuento */


    let des = 0;
function descuento(compra) {
    if (compra >= 100) {
        des = 0.1;
    } else if (compra >= 50 && compra <= 99) {
        des = 0.05;
    } else if (compra < 50) {
        des = 0;
    }
    const total = compra - (compra * des);
    return total;
}
rl.question("Ingrese el monto de la compra:", (precio) => {
    let compra = Number(precio);
    const totalPagar = descuento(compra);
    console.log(`Monto de la compra es de: ${compra.toFixed(2)}, el total a pagar con descuento es de: ${totalPagar.toFixed(2)}`);


/*Solicitar un nombre y mostrar si está en el arreglo o no esta */

const nombress = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];

function existe (nombre) {
    if (nombress.includes(nombre)) {
        return `${nombre} si está en el arreglo.`;
    } else {
        return `${nombre} no está en el arreglo.`;
    }
}
rl.question("Ingrese un nombre:", (nom) => {
    let resultado = existe(nom);
    console.log(resultado);


/*Solicita la edad al usuario y muestra en qué categoría está
-          Niñez 0-11

-          Adolescencia: 12-17

-          Adultez: 18-59

-          Vejez: 60+ */

rl.question("Ingrese su edad:", (edad) => {
    let categoria;

    if (edad >= 0 && edad <= 11) {
        categoria = "Niñez";
    } else if (edad >= 12 && edad <= 17) {
        categoria = "Adolescencia";
    } else if (edad >= 18 && edad <= 59) {
        categoria = "Adultez";
    } else if (edad >= 60) {
        categoria = "Vejez";
    }

    console.log("La categoría es:", categoria);
    rl.close();
});
}); 

    });
        });
            }); 