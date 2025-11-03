/* dado un array de numeros, calcula la suma de todos los valores impares*/ 

let valores = [2, 5, 7 , 3, 9, 11, 24, 36, 39, 41];
let sumaImpares = 0;
for (let i = 0; i < valores.length;i++) {
    if (valores[i] % 2 !== 0) {
        sumaImpares += valores[i]; //que hace el operador +=?  // El operador += suma el valor de la derecha al de la izquierda y asigna el resultado a la izquierda.
    }
    
}
console.log(`suma de impares:`, sumaImpares);



    
    /*dado un array de palabras, encuentra las(s) palabra(s) que tenga la mayor longitud de caracteres*/

let palabras = ['hola', 'adios', 'programacion', 'javascript', 'html', 'css'];
let mayorLongitud = 0;
let palabrasMasLargas = [];
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > mayorLongitud) {
        mayorLongitud = palabras[i].length;
        palabrasMasLargas = [palabras[i]];
    } else if (palabras[i].length === mayorLongitud) {
        palabrasMasLargas.push(palabras[i]);
    }
   
}
console.log(`palabra(s) mas larga(s):`, palabrasMasLargas);


/*dado un array, anota sus elementos N posiciones hacia la derecha.
 por ejemplo: [1,2,3,4,5] con N=2 se convierte en [4,5,1,2,3]*/

let array = [1,2,3,4,5];
let N = 2;
let arrayRotado = [];
for (let i = 0; i < array.length; i++) {
    arrayRotado[(i + N) % array.length] = array[i]; /*me ayuda a rotar el array */
}
console.log(`array original:`, array);
console.log(`array rotado:`, arrayRotado);