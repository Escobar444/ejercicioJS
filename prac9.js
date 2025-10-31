/*Ejercicios
1. Crear un programa que calcule el Índice de Masa Corporal (IMC) de una
persona y determine su categoría según la OMS.
2. Crear un programa que convierta temperaturas entre Celsius, Fahrenheit y
Kelvin.
3. (Opcional) Crear un programa que genere contraseñas seguras con diferentes
niveles de complejidad. */

//////////////

const persona = {
    nombre: "Juan",
    edad: 25,
    altura: 1.75, // en metros
    peso: 70, // en kilogramos
    calcularIMC: function() {
        const imc = this.peso / (this.altura ** 2);
        if (imc < 18.5) return "Bajo peso";
        if (imc < 25) return "Peso normal";
        if (imc < 30) return "Sobrepeso";
        return "Obesidad";
    }
};
console.log(`El IMC de ${persona.nombre} es: ${persona.calcularIMC()}`);

//////////////

//2

function convertirTemperatura(valor, unidadOrigen, unidadDestino) {
    let celsius;
    if (unidadOrigen === "Celsius") {
        celsius = valor;
    } else if (unidadOrigen === "Fahrenheit") {
        celsius = (valor - 32) * 5/9;
    } else if (unidadOrigen === "Kelvin") {
        celsius = valor - 273.15;
    }

    if (unidadDestino === "Celsius") {
        return celsius;
    } else if (unidadDestino === "Fahrenheit") {
        return (celsius * 9/5) + 32;
    } else if (unidadDestino === "Kelvin") {
        return celsius + 273.15;
    }
}
console.log(convertirTemperatura(100, "Celsius", "Fahrenheit")); 
console.log(convertirTemperatura(32, "Fahrenheit", "Celsius")); 
console.log(convertirTemperatura(0, "Celsius", "Kelvin"));
console.log(convertirTemperatura(273.15, "Kelvin", "Celsius"));

//////////////

//3

function generarContraseña(longitud, complejidad) {
    const caracteres = {
        baja: "abcdefghijklmnopqrstuvwxyz",
        media: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        alta: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
    };

    let conjuntoCaracteres = caracteres[complejidad];
    let contraseña = "";

    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * conjuntoCaracteres.length);
        contraseña += conjuntoCaracteres[indice];
    }

    return contraseña;
}
console.log(generarContraseña(8, "baja")); 
console.log(generarContraseña(12, "media")); 
console.log(generarContraseña(16, "alta"));