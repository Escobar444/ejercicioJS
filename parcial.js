// * Funciones en JavaScript * //

import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/* Ejercicio 1. Escriba un programa que solicite al usuario una cadena de texto (palabra o frase)
utilizando la librería readline, el programa debe de contener una función que permita
recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas
alfabéticamente. */

function stringOrdenado(cadena){
    const cadenaMin = cadena.toLowerCase()
    return cadenaMin.split('').sort().join('')
}

//!
/* rl.question("Ingrese una frase o palabra: ", (texto) =>{
    const textoOrdenado = stringOrdenado(texto)
    console.log(`Texto original: ${texto}`)
    console.log(`Texto ordenado alfabéticamente: ${textoOrdenado}`)
    rl.close()
}) */

/* Ejercicio 2. Escriba un programa que solicite al usuario una cadena de texto, este programa debe
de contener una función que reciba la cadena como parámetro y devuelva una nueva
cadena donde la primera letra de cada palabra esté en mayúsculas.  */

function cadenaUpper(string){
    const palabras = string.split(' ')
    const palabrasMayus = palabras.map(palabra => {
        return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase()
    })
    return palabrasMayus.join(' ')
}

//!
/* rl.question("Ingrese una frase o palabra: " , (texto) =>{
    const primeraMayus = cadenaUpper(texto)
    console.log(`Texto original: ${texto}`)
    console.log(`Texto con la primer letra en mayusculas: ${primeraMayus}`)
    rl.close()
}) */

/* Ejercicio 3. Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una
función que reciba como parámetro el texto y devuelva la cantidad de caracteres que
contiene. */

const CaracteresQ = (texto) => texto.length;

//!
/* rl.question("Ingrese una frase o palabra: " , (texto) =>{
    console.log(`Texto ingresado: ${texto}`)
    console.log(`La longitud (cantidad de caracteres) de tu texto es: ${CaracteresQ(texto)}`)
    rl.close()
}) */

/* Ejercicio 4. Escriba un programa que solicite al usuario el precio de tres productos, y cree una
función que permita calcular la suma total del precio de los tres productos, mostrar
en consola la suma */

const sumaProductos = (a,b,c) => parseFloat(a)+parseFloat(b)+parseFloat(c);

//!
/* rl.question("Ingrese el precio del primer producto: " , (producto1) =>{
    rl.question("Ingrese el precio del segundo producto; ", (producto2)=>{
        rl.question("Ingrese el precio del tercer producto; ", (producto3)=>{

            console.log(`Precio del producto1: $${producto1} \nPrecio del producto2: $${producto2} \nPrecio del producto3: $${producto3}`)
            console.log(`El precio total es de: $${sumaProductos(producto1,producto2,producto3)}`)
            rl.close()
        })
    })
})
 */

/* Ejercicio 5. Solicite al usuario una cadena y utilice una función que permita devolver el texto en
mayúsculas.  */

const toMayus = (texto) => texto.toUpperCase();

//!
/* rl.question("Ingrese una frase o palabra: " , (texto) =>{
    console.log(`Texto ingresado: ${texto}`)
    console.log(`Texto en mayusculas: ${toMayus(texto)}`)
    rl.close()
});
 */

/* Ejercicio 6. Solicite al usuario una temperatura en grados celsius y cree una función que permita
convertir esa temperatura Celsius a Fahrenheit.  */

const toFahrenheit = (celsius) => celsius * 1.8 + 32;

//!
/* rl.question("Ingrese una temperatura en celsius: " , (temperatura) =>{
    console.log(`Temperatura en Celsius: ${temperatura}°C`)
    console.log(`Texto en mayusculas: ${toFahrenheit(temperatura)}°F`)
    rl.close()
}); */

/* Ejercicio 7. Cree una función que permita calcular el descuento de un producto. Solicite al usuario
el precio de un producto y el porcentaje de descuento, devuelva el precio final */

function descuentoProd(precio,descuentoPerc){
    const descuento = precio*descuentoPerc
    return  precio - descuento
}

//!
/* rl.question("Ingrese el precio del producto: " , (precio) =>{
    rl.question("Ingrese el porcentaje de descuento (en decimales): ", (descuentoPerc)=>{

        console.log(`Precio del producto: $${precio} \nPorcentaje de descuento: ${descuentoPerc*100}%`)
        console.log(`Total: $${descuentoProd(precio,descuentoPerc)}`)
        rl.close()
    })
}); */

/* Ejercicio 8. Cree un programa que solicite al usuario su salario base, el número de horas extras
trabajadas y el valor de una hora de trabajo normal. Luego, calcule el salario total,
considerando que cada hora extra se paga 1.5 del valor de la hora normal. Mostrar el
resultado en la consola.  */

function salarioTotal(salario,horasEx,horasBase){
    const dineroExtra = parseFloat(horasBase) * 1.5
    const pagoExtra = parseFloat(horasEx) * dineroExtra
    const total = parseFloat(salario) + pagoExtra
    return total
}

rl.question("Ingrese su salario base: ", (salario)=>{
    rl.question("Ingrese la cantidad de horas extra que ha trabajado: ", (horasEx)=>{
        rl.question("Ingrese el pago que recibe por hora de trabajo normal: ",(horasBase)=>{
            console.log(`Salario base: $${salario} \nHoras extra trabajadas: ${horasEx} \nPago por hora de trabajo normal: $${horasBase}`)
            console.log(`Su salario total es de: ${salarioTotal(salario,horasEx,horasBase)}`)
        rl.close()
        });
    });
});             