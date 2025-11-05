/*2. Piedra, Papel o Tijeras
Descripción:
Implementa el clásico juego de Piedra, Papel o Tijeras contra la computadora en
formato de mejor de 3 rondas.
Requisitos Técnicos:
• Jugar al mejor de 3 rondas
• Validar que la entrada del usuario sea una opción válida
• Generar elección aleatoria de la CPU
• Aplicar las reglas clásicas del juego:
• Piedra gana a Tijeras
• Tijeras gana a Papel
• Papel gana a Piedra
• Llevar registro del puntaje por ronda
• Anunciar al ganador final del juego */

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jugarPiedraPapelTijeras() {
    const opciones = ['Piedra', 'Papel', 'Tijeras'];
    let puntajeUsuario = 0;
    let puntajeCPU = 0;
    let rondas = 3;
    console.log("¡Bienvenido a Piedra, Papel o Tijeras! Juega contra la CPU en el mejor de 3 rondas.");

    function jugarRonda(rondaActual) {
        if (rondaActual > rondas) {
            console.log(`Juego terminado. Puntaje final - Usuario: ${puntajeUsuario}, CPU: ${puntajeCPU}`);
            if (puntajeUsuario > puntajeCPU) {
                console.log("¡Felicidades! Has ganado el juego.");
            } else if (puntajeCPU > puntajeUsuario) {
                console.log("La CPU ha ganado el juego. ¡Mejor suerte la próxima vez!");
            } else {
                console.log("El juego terminó en empate.");
            }
            rl.close();
            return;
        }
        rl.question(`Ronda ${rondaActual} - Elige Piedra, Papel o Tijeras: `, (respuesta) => {
            const eleccionUsuario = respuesta.charAt(0).toUpperCase() + respuesta.slice(1).toLowerCase();
            if (!opciones.includes(eleccionUsuario)) {
                console.log("Opción no válida. Por favor elige Piedra, Papel o Tijeras.");
                jugarRonda(rondaActual);
                return;
            }
            const eleccionCPU = opciones[Math.floor(Math.random() * opciones.length)];
            console.log(`La CPU eligió: ${eleccionCPU}`);
            if (eleccionUsuario === eleccionCPU) {
                console.log("Empate en esta ronda.");
            } else if (
                (eleccionUsuario === 'Piedra' && eleccionCPU === 'Tijeras') ||
                (eleccionUsuario === 'Tijeras' && eleccionCPU === 'Papel') ||
                (eleccionUsuario === 'Papel' && eleccionCPU === 'Piedra')
            ) {
                console.log("¡Ganaste esta ronda!");
                puntajeUsuario++;
            } else {
                console.log("La CPU ganó esta ronda.");
                puntajeCPU++;
            }
            jugarRonda(rondaActual + 1);
        });
    }
    jugarRonda(1);
}

jugarPiedraPapelTijeras();
