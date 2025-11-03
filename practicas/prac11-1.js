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