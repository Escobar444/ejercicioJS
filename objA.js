/*const  estudiante ={
    nombre: "Juan",
    apellido: "Cruz",
    edad: "27 años",
    direccion: {
        pais: "El Salvador",
        calle: "Los almendros",
        numCasa: 27
    }
}

//accesoso al objeto
console.log(estudiante);
console.log(estudiante.direccion)
console.log(estudiante['direccion']);

estudiante.colorOjos = "Azules";
console.log(estudiante);

//agregar propiedad al objeto anidado
estudiante.direccion.Postal = "503";
console.log(estudiante['direccion']);

//modificar propiedad del objeto anidado
estudiante.direccion.numCasa = "20";
console.log(estudiante['direccion']);

//eliminar propiedad del objeto anidado
delete estudiante.direccion.numCasa
console.log(estudiante['direccion']);   */

////////
/*una tienda online gestiona la informacion de susu productos. Cada producto debe tener:*/

const producto = {
    nombre: "laptop",
    precio: 250,
    categoria: "electronica",
    inventario: {
        stock: 40,
        proveedor: "Proveedor XYZ",
        ubicacion: "Almacén Central"
    },
    Historial: {
        fechaIngreso: "2023-01-01",
        ultimaVenta: "2023-06-15",
        ventasTotales: 100,
    },
}
//mostrar solo los detalles
const {nombre, precio, categoria} = producto;
console.log(nombre);
console.log(precio);
console.log(categoria);

producto.inventario.stock = 50
console.log(producto);
//cambiar la categoria
producto.categoria = "computadoras"
console.log(producto.categoria);
//extraer el nombre y precio en variables separadas
const{nombre: nombreProducto, precio: precioProducto} = producto;
console.log(nombreProducto);
console.log(precioProducto);

console.log(producto);


///2.
/*una aplicacion movil necesita gestionar los perfiles de sus usuario. se requiere crear un objeto anidado que contenga:
-infromacion personal (nombre,edad,email)
-preferencias de la aplicacion (idioma, notificaciones,tema)
-estadistcas de usu(fechaRegistro,ultimoAcceso,numeroSesiones).
-tareas a realizar:*/
const perfilUsuario = {
    infoPersonal: {
        nombre: "Juan",
        edad: 30,
        email: "juan@example.com"
    },
    preferencias: {
        idioma: "español",
        notificaciones: true,
        tema: "oscuro"
    },
    estadisticas: {
        fechaRegistro: "2023-01-01",
        ultimoAcceso: "2023-06-15",
        numeroSesiones: 10
    },
}
console.log(perfilUsuario);
/*Tareas a realizar:
Mostrar cada sección de información por separado.

Cambiar el idioma de "español" a "inglés".

Actualizar la fecha de último acceso a la fecha actual.

Eliminar una preferencia innecesaria.

Extraer el email y el idioma en variables separadas.

Mostrar el perfil completo actualizado.
*/
const {infoPersonal, preferencias, estadisticas} = perfilUsuario;

console.log(infoPersonal);
console.log(preferencias);
console.log(estadisticas);

// Cambiar el idioma de "español" a "inglés".
preferencias.idioma = "inglés";

// Actualizar la fecha de último acceso a la fecha actual.
estadisticas.ultimoAcceso = new Date().toISOString().split("T")[0];

// Eliminar una preferencia innecesaria.
delete preferencias.notificaciones;

// Extraer el email y el idioma en variables separadas.
const {email} = infoPersonal;
const {idioma} = preferencias;

// Mostrar el perfil completo actualizado.
console.log(perfilUsuario);

//3.
/*. Una biblioteca maneja información de sus libros:

Información (titulo, autor, genero)

Disponibilidad (copias, prestados, ubicacion)

Registro (fechaPublicacion, fechaIngreso, ultimaRevision)

Tareas a realizar:

Crear el objeto libro.

Mostrar la información del autor.

Calcular cuántos ejemplares disponibles quedan (copias - prestados).

Actualizar la ultimaRevision con la fecha actual.

Cambiar el género del libro.

Extraer titulo y ubicacion en variables.

Mostrar el objeto actualizado. */

const biblioteca = {
    libro: {
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Ficción",
        disponibilidad: {
            copias: 5,
            prestados: 2,
            ubicacion: "Estante 3"
        },
        registro: {
            fechaPublicacion: "1925-04-10",
            fechaIngreso: "2023-01-01",
            ultimaRevision: "2023-06-15"
        }
    }
};
console.log(biblioteca);

// Mostrar la información del autor.
console.log(biblioteca.libro.autor);

// Calcular cuántos ejemplares disponibles quedan (copias - prestados).
const ejemplaresDisponibles = biblioteca.libro.disponibilidad.copias - biblioteca.libro.disponibilidad.prestados;
console.log(`Ejemplares disponibles: ${ejemplaresDisponibles}`);

// Actualizar la ultimaRevision con la fecha actual.
biblioteca.libro.registro.ultimaRevision = new Date().toISOString().split("T")[0];

// Cambiar el género del libro.
biblioteca.libro.genero = "Clásico";

// Extraer titulo y ubicacion en variables.
const {titulo, ubicacion} = biblioteca.libro;
console.log(`Título: ${titulo}`);
console.log(`Ubicación: ${ubicacion}`);

// Mostrar el objeto actualizado.
console.log(biblioteca);
