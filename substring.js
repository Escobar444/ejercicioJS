//un sistema de gestion de pedidos  recibe codigos de seguimiento en el formato: PED-2025-00045, se necisita extraer el año del pedidioy el numero de orden usando el metodo substring():
//Requisitos:
//1. extraer el añodel pedido (2025) y el numero de orden (00045) usando substring().
//importar el modulo
import readline from 'readline';

// Crear una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
///PED-2025-00045
rl.question ("Ingrese el codigo del pedido(ej:PED-2025-00045):", (codigo)=>
     {
    const año= codigo.substring(4,8);//extrae el año del pedido
    const numeroOrden= codigo.substring(9)//extrae el numero de orden del pedido

    console.log(`año del pedido: ${año}`)
    console.log(`numero de orden:${numeroOrden}`) 
    


rl.question ("ingrese su nombre completo", (form)=>{
    const nombre= form.trim()
    const nombSinespacio= form.replaceAll(' ','')
    const longitudNombre= nombSinespacio.length
    console.log(`su nombre es: ${nombre}`)
    console.log(`su nombre sin espacios es: ${nombSinespacio}`)
    console.log(`la longitud de su nombre sin espacios es: ${longitudNombre}`)

    rl.question (`ingrese su coorreo electronico`, (correo)=>{
        const correoSinEspacios = correo.trim();
        const correomin = correo.toLowerCase();
        const dominio = correoSinEspacios.split('@')[1];
        const gmail = correoSinEspacios.includes('gmail.com');
    console.log(`su correo es: ${correoSinEspacios}`);
    console.log(`su correo en minusculas es: ${correomin}`);
    console.log(`su dominio es: ${dominio}`);
    console.log(`su correo es de gmail: ${gmail}`);
 
    rl.question (`ingrese un codigo`, (codig)=>{
        const codUlt= codig.slice(-4);

        console.log(`los ultimos 4 caracteres del codigo son: ${codUlt}`);

    rl.question (`ingrese una frase`, (aparece)=>{
    const frase = aparece.indexOf(`error`)
    console.log(`la palabra error se ecnuentra en la posicion: ${frase}`);
         
   

 rl.close()
    })
})

})
})
})




