/* crear un programa que pida una nota al usuario y mediante una funcion determine si la nota es aprobado ( si es mayor o igual a 6) o reprobado (si es menor a 6)*/

import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("ingrese su nota:", (nota)=>{
    const proceso = (nota) => {
        if (nota >= 6) {
            console.log("Aprobado");
        } else if (nota < 6) {
            console.log("Reprobado");
        }
    }
    proceso(nota);
    


/* crea un programa que solicite al usuario dos datos:
- el saldo disponible en su cuenta
- el precio del producto que desea comprar 
determinar si el usuario tiene suficiente dinero para realizar la compra.
si el saldo es mayor o igual que el precio, mostrar un mensaje indicando que la compra puede realizarse.
si el saldo es menor que el precio, mostrar un mensaje indicando que no tiene fondos suficientes
*/

rl.question("ingrese su saldo disponible:", (saldo)=>{
    rl.question("ingrese el precio del producto que desea comprar:", (precio)=>{
        const verificaciion = (saldo, precio) => {
            if (saldo >= precio) {
                console.log("La compra puede realizarse");
            } else {
                console.log("No tiene fondos suficientes");
            }
        }
        verificaciion(saldo, precio);
    
   
/*desarrolla un programa que determine si un estudiante puede inscribirse aun curso virtual.
 el sisitema debe solicitar dos datos al usuario:
 
 -su edad
 -si dispone de una computadora personal ( respondiendo si o no)
 */

 rl.question("ingrese su edad:", (edad) =>{
    rl.question("dispone de una computadora personal? (si/no):", (comp)=>{
        const inscribirse = (edad,comp) =>  {
            if (edad >= 15 && comp.toLowerCase() === "si") {
                console.log("felicidades! aprobaste la inscripcion al curso virtual");
            } else {
                console.log("lamentablemente no cumples con los requisitos para inscribirte al curso virtual");
            }
        }
        inscribirse(edad,comp);
        rl.close();
        })
      })     
    })
  })
})
