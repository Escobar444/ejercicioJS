// ///importamos el modulo readline para leer la entrada del usuario
const readline = require('readline');
// // Creamos una interfaz de lectura para la entrada estándar
// // y la salida estándar
const rl = readline.createInterface({
  input: process.stdin,
    output: process.stdout 
});
// // Pedimos al usuario que ingrese dos números y calculamos su suma
// rl.question('ingrese el primer numero: ', (input) => {
//   const num1 = parseFloat(input);
//     rl.question('ingrese el segundo numero: ', (input) => {
//     const num2 = parseFloat(input);
//         const suma = num1 + num2;
//         console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
//         rl.close();
//     }
//     );
//     });

// rl.question("ingrese una temperatura en celciius ", (celcius)=>{
//     let temparse= parseFloat(celcius);
//     let fat= (temparse * 9/5) + 32;
//     console.log('la conersion de la yemperatura es: ', fat);
//     rl.close
// })

rl.question ("ingrese la altura del triangulo ", (altura)=>{
    let altparse= parseFloat(altura);
    rl.question("ingrese la base del triangulo ", (base)=>{
        let baseparse= parseFloat(base);
        let area= (baseparse * altparse)/2;
        console.log('el area del triangulo es: ', area);
        rl.close();
    });
})