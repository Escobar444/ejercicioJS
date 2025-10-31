/* Ejercicios
1. Escriba un programa que solicite al usuario una cadena de texto (palabra o
frase) utilizando la librería readline, el programa debe de contener una función
que permita recibir la cadena ingresada y devuelva una cadena con todas sus
letras ordenadas alfabéticamente.
2. Escriba un programa que solicite al usuario una cadena de texto, este
programa debe de contener una función que reciba la cadena como parámetro
y devuelva una nueva cadena donde la primera letra de cada palabra esté en
mayúsculas.
3. Cree un programa que solicite al usuario su salario base, el número de horas
extras trabajadas y el valor de una hora de trabajo normal. Luego, calcule el
salario total, considerando que cada hora extra se paga 1.5 del valor de la hora
normal. Mostrar el resultado en la consola. */

//////////////

import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
    
//1
function ordenarCadena(cadena) {
    return cadena.split('').sort().join('');
}

rl.question("Ingrese una cadena de texto: ", (respuesta) => {
    console.log("Cadena ordenada:", ordenarCadena(respuesta));
  


//////////////

//2
function capitalizarPalabras(cadena) {
    return cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
}

rl.question("Ingrese una cadena de texto: ", (respuesta) => {
    console.log("Cadena capitalizada:", capitalizarPalabras(respuesta));
    


//////////////

//3
rl.question("Ingrese su salario base: ", (salarioBase) => {
    rl.question("Ingrese el número de horas extras trabajadas: ", (horasExtras) => {
        rl.question("Ingrese el valor de una hora de trabajo normal: ", (valorHoraNormal) => {
            const salarioTotal = calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal);
            console.log("El salario total es:", salarioTotal);
          
  

function calcularSalarioTotal(salarioBase, horasExtras, valorHoraNormal) {
    salarioBase = parseFloat(salarioBase);
    horasExtras = parseFloat(horasExtras);
    valorHoraNormal = parseFloat(valorHoraNormal);

    const pagoHorasExtras = horasExtras * valorHoraNormal * 1.5;
    return salarioBase + pagoHorasExtras;
}

rl.close();


});

}); 
     });
    });
});