(function(){
    const hola = "soy privado";
    var contador = 0;
console.log("me ejecuto al instante");
})();
 //coinsole.log(hola);

(function (nombre, edad) {
    console.log(`hola ${nombre}, tienes ${edad} años`)
})("Juan", 30);

function normal () {
    console.log(arguments);
}

normal(1,2, 'pedro')

const arrow =() => {
    console.log(arguments);
}
//arrow(1, 3,'pedro')

//////////////


const persona1 = {
    nombre: "Ana",
    tareas: ["tarea1", "tarea2", "tarea3"],
    mostrarTareas: function() {
        this.tareas.forEach(function(tarea) {
            console.log(`${this.nombre}: ${tarea}`);
        })
    }
}

const persona2 ={
    nombre: "Ana",
    tareas: ["tarea1", "tarea2", "tarea3"],
    mostrarTareas: function() {
        this.tareas.forEach( (tarea) => {
            console.log(`${this.nombre}: ${tarea}`);
        })
    }
}

persona1.mostrarTareas();
persona2.mostrarTareas();



////


//1

const reproductorMusica = {
    canciones: ["Cancion 1", "Cancion 2", "Cancion 3"],
    cancionActual: 0,

    reproducir: () => {
        console.log(`Reproduciendo: ${reproductorMusica.canciones[reproductorMusica.cancionActual]}`);
    },

    siguiente: function () {
        this.cancionActual = (this.cancionActual + 1) % this.canciones.length;
        console.log(`Reproduciendo: ${this.canciones[this.cancionActual]}`);
    },

 anterior: function () {
    this.cancionActual = (this.cancionActual - 1 + this.canciones.length) % this.canciones.length;
    console.log(`cancion anterior: ${this.canciones[this.cancionActual]}`);
}
}

reproductorMusica.reproducir();
reproductorMusica.siguiente();
reproductorMusica.anterior();
reproductorMusica.anterior();
reproductorMusica.anterior();



//2

