//importar el modulo
import readline from 'readline';

// Crear una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/*. Solicitar tres nombres al usuario para ser guardados en un array y mostrar luego cada uno*/

let nombres = [];

rl.question("Ingrese el primer nombre: ", (nombre1) => {
    nombres.push(nombre1);

    rl.question("Ingrese el segundo nombre: ", (nombre2) => {
        nombres.push(nombre2);

        rl.question("Ingrese el tercer nombre: ", (nombre3) => {
            nombres.push(nombre3);

            console.log("los nombres ingresados son:");
            console.log("primer nombre:", nombres[0]);
            console.log("segundo nombre:", nombres[1]);
            console.log("tercer nombre:", nombres[2]);
            

         
       

/*Solicitar al usuario tres números y calcula el promedio*/
let numeros = [];

rl.question("ingrese el primer numero:",(num1)=>{
    numeros.push(num1);
    rl.question("ingrese el segundo numero:",(num2)=>{
        numeros.push(num2);
        rl.question("ingrese el tercer numero:",(num3)=>{
            numeros.push(num3);

            let suma = 0;

            suma = parseInt(num1) + parseInt(num2) + parseInt(num3);

            let promedio = suma / 3;
            console.log("el promedio es:", promedio);

       
//Solicita al usuario las temperaturas de tres días y muestra cuál fue la más alta//
let temperaturas = [];

rl.question("Ingrese la temperatura del primer día:",(temp1)=>{
    temperaturas.push(temp1);
    rl.question("Ingrese la temperatura del segundo día:",(temp2)=>{
        temperaturas.push(temp2);
        rl.question("Ingrese la temperatura del tercer día:",(temp3)=>{
            temperaturas.push(temp3);
            let maxTemp = Math.max(parseFloat(temp1), parseFloat(temp2), parseFloat(temp3));
            console.log("La temperatura más alta es:", maxTemp);
            rl.close();

        
        })})})

   
        })
    })
}) 
})
})
})