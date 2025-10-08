/*solicitar al usuario tres gastos del mes y calcular el total gastado durante ese mes, mostrar por consola cada uno de los gastos y el total*/
import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("ingrese el primer gasto del mes:", (gas1)=> {
    rl.question ("ingrese el segundo gasto del mes:", (gas2)=>{
        rl.question ("ingrese el tercer gasto del mes:", (gas3)=>{
            const suma = parseFloat(gas1) + parseFloat(gas2) + parseFloat(gas3);
            const gastos = [gas1, gas2, gas3, suma];//array
            console.log(`el gasto de cada mes es: ${gastos[0]}, ${gastos[1]}, ${gastos[2]}`);
            console.log(`el total gastado en el mes es: ${gastos[3]}`);



/*un conductor anota los litros que gasta en tres viajes. calcula el promedio de consumo total,impirmir el promedio de consumo*/

rl.question("ingrese los litros gastados en el primer viaje:", (li1)=>{
    rl.question("ingrese los litros gastados en el segundo viaje:", (li2)=>{
        rl.question("ingrese los litros gastados en el tercer viaje:", (li3)=>{
            const promedio = (parseFloat(li1) + parseFloat(li2) + parseFloat(li3)) / 3;
            const litros = [li1, li2, li3, promedio];//array
            console.log(`los litros gastados en cada viaje son: ${litros[0]}, ${litros[1]}, ${litros[2]}`);
            console.log(`el promedio de consumo total es: ${litros[3].toFixed(2)}`);
       



/*solicita al usuario el precio de tres productos, calcula el total de la compra y el IVA(13%). Imprimir  el subtotal, el iva y el total a pagar,debe llevar un array */
let Iva = 0.13;

rl.question("ingrese el precio del primer producto:",(prod1)=>{
    rl.question("ingrese el precio del segundo producto:",(prod2)=>{
        rl.question("ingrese el precio del tercer producto:",(prod3)=>{
            
            const subtotal = parseFloat(prod1) + parseFloat(prod2) + parseFloat(prod3);
            const ivaTotal = subtotal * Iva;
            const totalPagar = subtotal + ivaTotal;
            const produc = [prod1, prod2, prod3, subtotal, ivaTotal, totalPagar];//array
            console.log(`el subtotal es: ${produc[3]}`, `el iva es: ${produc[4]}`, `el total a pagar es: ${produc[5]}`);

/*solicitar al usuario el sueldo, el bono y el descuento por seguro. Guarda esos tres datos en un array y calculo el salario final. imprimir el sueldo, el bono, el descuento y el salario final*/

rl.question("ingrese su sueldo base",(suel)=>{
    rl.question("ingrese su bono:",(bono)=>{
        rl.question("ingrese su descuento por seguro:",(desc)=>{
            const datos = [suel, bono, desc];//array
            const salarioFinal = parseFloat(suel) + parseFloat(bono) - parseFloat(desc);
            console.log(`su sueldo es: ${datos[0]}`, `su bono es: ${datos[1]}`, `su descuento por seguro es: ${datos[2]}`, `su salario final es: ${salarioFinal.toFixed(2)}`);
      
        
                rl.close();
        })
    })
})
 })})
})
})})
})
  })
    })

})