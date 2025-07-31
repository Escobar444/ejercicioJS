const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, 
    output: process.stdout
});

//1
rl.question("ingrese su primer nota: ", (nota1) => {
    let no1 = parseFloat(nota1);
    rl.question("ingrese su segunda nota: ", (nota2) => {
        let no2 = parseFloat(nota2);
        rl.question("ingrese su tercera nota: ", (nota3) => {
            let no3 = parseFloat(nota3);
            let promedio = (no1 + no2 + no3) / 3;
            console.log(`El promedio de las notas es: ${promedio}`);
            
//2
rl.question("ingrese los kilometros recorridos: ",(kml)=>{
    let km = parseFloat(kml);
    let millas = km * 0.621371;
    console.log(`La distancia en millas es: ${millas.toFixed(2)}`);

//3
rl.question("ingrese el precio del producto:", (producto)=>{
    let precio = parseFloat(producto);
    rl.question("ingrese la cantidad de productos comprados: ", (cantidad)=>{
        let cant = parseFloat(cantidad);
        let total = precio * cant;
        console.log(`El total a pagar es: ${total}`);
        rl.close();
    })
})
           
});
});

});
});

