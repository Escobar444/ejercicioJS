//declaracion de la funcion saludar
/*function saludar(){
    //contenido de la funcion
    console.log("Hola Mundo");
}

//ejecucion de la funcion
saludar();*/

///
//craer una funcion que reciba un numero y verifique si el numero ingresado por el usuario es un numero primo

function esPrimo(num){
    if (num <=1) return false;

    for (let i = 2; i< num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("se verifico el numero y es:",esPrimo(120));
console.log("se verifico el numero y es:",esPrimo(100));
console.log("se verifico el numero y es:",esPrimo(13));

/*2. Crear una función que reciba como parámetro un array de números, hay que
remover los valores repetidos de dicho array y retornar un nuevo array pero en
orden inverso al ingresado.
Ejemplo: [1, 3, 3, 5, 5] ➞ [5, 3, 1]*/

function remover(parametro){
    let arr = [];
 
    for (let i=0; i<parametro.length; i++){
        if (!arr.includes(parametro[i])){
            arr.push(parametro[i]);
        }
    }
    return arr.reverse();
}
console.log(remover([1,3,3,5,5]));

//////

/* Crear una función que retorne un nuevo array con valores pares y positivos
únicamente (excluyendo el cero), el nuevo array debe estar en el mismo orden
en que encuentre los valores.
Ejemplo: uniqueArr([10, 6, -12, 13, 5, 13]) ➞ [10, 6]*/

function uniqueArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 === 0 && !result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(uniqueArr([10, 6, -12, 13, 5, 13]));