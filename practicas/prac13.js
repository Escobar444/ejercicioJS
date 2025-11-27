/*1. Implementa una función que genere el Triángulo de Pascal hasta un nivel específico
n. Cada número es la suma de los dos números directamente arriba de él. Usa bucles
for anidados para construir el triángulo.
Ejemplo para n=5:
 [1],
 [1, 1],
 [1, 2, 1],
 [1, 3, 3, 1],
 [1, 4, 6, 4, 1]
2. Escribe una función que reciba una cadena de texto y cuente cuántas vocales (a, e, i,
o, u) contiene, sin diferenciar entre mayúsculas y minúsculas.
Ejemplo:
contarVocales("Hola Mundo"); // debería retornar 4
3. Crea una función que reciba un array de números y devuelva el número más grande
del array usando un bucle for.
Ejemplo:
encontrarMayor([3, 7, 2, 9, 1, 5]); // debería retornar 9
encontrarMayor([-1, -5, -2, -8]); // debería retornar -1 */

const generarTrianguloPascal = (n) => {
    const triangulo = [];
    for (let i = 0; i < n; i++) {
        triangulo[i] = [];
        triangulo[i][0] = 1;
        for (let j = 1; j < i; j++) {
            triangulo[i][j] = triangulo[i - 1][j - 1] + triangulo[i - 1][j];
        }
        triangulo[i][i] = 1;
    }
    return triangulo;
};
console.log("Triángulo de Pascal hasta nivel 5:");
console.log(generarTrianguloPascal(5));

//2. Función para contar vocales en una cadena de texto
const contarVocales = (cadena) => {
    const vocales = "aeiouAEIOU";
    let contador = 0;
    for (let char of cadena) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    return contador;
};
console.log('Número de vocales en "Hola Mundo":', contarVocales("Hola Mundo"));

//3. Función para encontrar el número más grande en un array
const encontrarMayor = (array) => {
    let mayor = array[0];
    for (let num of array) {
        if (num > mayor) {
            mayor = num;
        }   
    }
    return mayor;
};
console.log('Número más grande en [3, 7, 2, 9, 1, 5]:', encontrarMayor([3, 7, 2, 9, 1, 5]));
console.log('Número más grande en [-1, -5, -2, -8]:', encontrarMayor([-1, -5, -2, -8]));