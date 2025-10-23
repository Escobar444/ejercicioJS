import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularArea(base, altura) {
    let calculo = parseFloat(base * altura);
    return calculo
}

rl.question("Ingrese la base del rectángulo: ", base => {
    rl.question('Ingrese la altura del rectángulo: ', altura => {
        console.log(`El area del rectángulo es: ${calcularArea(base, altura)}`);
        

//22//
function calcularDescuento(precio, descuento) {
    precio = parseFloat(precio)
    descuento = parseFloat(descuento)

    let des = precio * descuento;
    let totalPagar = precio - des;

    console.log(`El descuento del procucto obtenido es de: $${des}\nTotal a pagar es de $${totalPagar}`);
}

rl.question("Ingrese el precio del producto: ", precio => {
    rl.question('Ingrese el desciento a aplicar, expresado en decimales Ej: 0.20 para el 20%: ', desc => {

        calcularDescuento(precio, desc)

//3//
function saludar(nombre) {
    console.log(`Hola ${nombre}, bienvendio a JavaScript`);
}

let resta = (n1, n2) => {
    let res = n1 - n2;
    return res;
}

rl.question("Ingrese su nombre para saludarlo: ", (nombre) => {
    rl.question('Ingrese el primer número: ', (num1) => {
        rl.question('Ingrese el número 2: ', (num2) => {
            saludar(nombre)
            console.log(`La resta de ambos números es: ${resta(num1, num2)}`);
         
        rl.close()
    })
})
    })
})   
        })
    })
})
