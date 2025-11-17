const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function adivinaElnumero(){
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;

    console.log("Adivina el número entre 1 y 10. Tienes 3 intentos.");

    function pregunatar (){
        if (intentos === 0) {
            console.log(`Game over! EL número era ${numeroSecreto}.`);
            rl.close();
            return;
        }
    
    
        rl.question(`Intentos restantes ${intentos}. Ingresa tu número: `, (respuesta) => {
            let numeroUsuario = parseInt(respuesta);
            if (isNaN(numeroUsuario)) {
                console.log("Valor no válido. Por favor ingresa un número.");
                pregunatar();
                return;
            }
            if (numeroUsuario === numeroSecreto) {
                console.log("¡Felicidades! Has adivinado el número.");
                rl.close();
            }
            else if (numeroUsuario < numeroSecreto) {
                console.log("El número es mayor.");
                intentos--;
                pregunatar();
            }
            else {
                console.log("El número es menor.");
                intentos--;
                pregunatar();
            }
            
        })
     }
    pregunatar();

    }
adivinaElnumero();

    