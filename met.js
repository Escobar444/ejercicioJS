//importar el modulo
import readline from 'readline';

// Crear una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// realizamos la pregunta al usuario
rl.question ("Ingrese una frase:", (frase)=> {
 console.log(`\n === tratamiento de cadena === \n`);

 //1.length
 const fraseLength = frase.length;
   console.log(`La longitud de la frase es: ${fraseLength}`);

    //2. toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log(`la frase en mayusculas es: ${fraseMayus}`);

    //3. toLowerCase
    const fraseMinus = frase.toLowerCase();
    console.log(`la frase en minusculas es: ${fraseMinus}`);

    //4. trim
    const fraseTrim = frase.trim();
    console.log(`la frase sin espacios al inicio y al final es: ${fraseTrim}`);

    //5. substring
    const sudCadena = frase.substring(0, 5);
    console.log(`Los primeros 5 caracteres de la frase : ${sudCadena}`);

    //6. slice
    const subCadenaSlice = frase.slice(0.5);
    console.log(`Los primeros 5 caracteres de la frase son: ${subCadenaSlice}`);
    const subCadenaSliceNeg = frase.slice(-5);
    console.log(`Los ultimos 5 caracteres de la frase son: ${subCadenaSliceNeg}`);

    //7. replace
    const frasereemplazada = frase.replace('hola','adios');
    console.log(`La frase con "hola" reemplazada por "adios" es: ${frasereemplazada}`);

    //8. replaceAll
    const fraseReemplazoTodo = frase.replaceAll('hola','adios');
    console.log(`La frase con todas las ocurrencias de "hola" reemplazadas por "adios" es: ${fraseReemplazoTodo}`);

    //9. split
    const fraseArray = frase.split(' ');
    console.log(`la frase dividida en palabras es: ${fraseArray}`);
    //10 includes
    const incluyeHola = frase.includes('hola');
    console.log(`la frase incluye la palabra "hola": ${incluyeHola}`);
    //indexOf
    const indiceHola = frase.indexOf('hola');
    console.log(`El indice de la primera ocurrencia de "hola" es: ${indiceHola}`);

    //startsWith
    const empiezaConHola = frase.startsWith('hola');
    console.log(`La frase empieza con "hola": ${empiezaConHola}`);
    //endsWith
    const terminaConAdios = frase.endsWith('adios');
    console.log(`La frase termina con "adios": ${terminaConAdios}`);
   rl.close();
})