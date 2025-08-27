import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un numero:", (num) => {
   const resultado = num.toString().split("").map( n => Math.pow(Number(n),2));
   console.log("El resultado es:", resultado);
    


//Crear un programa que reciba un número y lo devuelva con sus cifras 
// invertidas
rl.question("Ingrese un numero:", (num) => {
   const resultado = num.toString().split("").reverse().join("");
   console.log("El resultado es:", resultado);


/*Cree una función que reciba un número, su tarea es retornar un array con las 
dos mitades del número.
numberSplit(4) ➞ [2, 2]
numberSplit(11) ➞ [5, 6]*/

rl.question("ingrese un numero:",(num) =>{
    const mitad1 =Math.floor(num /2);
    const mitad2 = Math.round(num /2);
    const resultado = [mitad1, mitad2]
    console.log("El resultado es:", resultado);
      rl.close(); 

})
});
});