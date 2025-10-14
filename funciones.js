/*Realizar los siguientes ejercicios, implementar funciones de flecha , adjuntar a este espacio el enlace de github donde esta alojando dicho ejercicios.  */

//1. Calcular el cuadrado de un número

const cuadrado = (numero) => {
    let resultado = numero * numero;
    return resultado;
}
console.log("El cuadrado de 5 es: " + cuadrado(5));

//2. Calcular el promedio de 3 números

const promedio = (num1, num2, num3) => {
    let resultado = (num1 + num2 + num3) / 3;
    return resultado;
}
console.log("El promedio de 5, 10 y 15 es: " + promedio(5, 10, 15));

//3. Calcular el área de un triángulo

const areaTriangulo = (base, altura) => {
    let resultado = (base * altura) / 2;
    return resultado;
}
console.log("El área de un triángulo de base 5 y altura 10 es: " + areaTriangulo(5, 10));
