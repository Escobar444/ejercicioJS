/*Una universidad guarda datos de cada Estudiante:
• Datos personales (nombre, edad, email)
• Cursos (lista con nombre, clasificación, estado [aprobado/en curso])
• configuración (idioma, notificaciones, ultimo Acceso)
Tareas:
1. Mostrar el nombre y email del estudiante.
2. Calcular el promedio de calificaciones aprobadas.
3. Cambiar el idioma de la configuración.
4. Actualizar el ultimo Acceso con la fecha actual.
5. Extraer edad y notificaciones en variables separadas.
6. Mostrar el objeto actualizado.*/

const estudiante = {
  datosPersonales: {
    nombre: "Juan",
    edad: 20,
    email: "juan@example.com"
  },
  cursos: [
    { nombre: "Matemáticas", clasificacion: 4.5, estado: "aprobado" },
    { nombre: "Historia", clasificacion: 3.8, estado: "en curso" }
  ],
  configuracion: {
    idioma: "español",
    notificaciones: true,
    ultimoAcceso: "2023-03-15"
  }
};
console.log(estudiante.datosPersonales.nombre);
console.log(estudiante.datosPersonales.email);
const cursosAprobados = estudiante.cursos.filter(curso => curso.estado === "aprobado");
const promedioAprobados = cursosAprobados.reduce((sum, curso) => sum + curso.clasificacion, 0) / cursosAprobados.length;
console.log(promedioAprobados);

estudiante.configuracion.idioma = "inglés";
estudiante.configuracion.ultimoAcceso = new Date().toISOString().split("T")[0];
const { edad, notificaciones } = estudiante.configuracion;
console.log(estudiante);

/*Una tienda maneja datos de sus Producto:
Datos (nombre, categoría, precio)
Stock (cantidad, vendidos, ubicación)
Reseñas (usuarios con nombre, comentario, puntuación)
Tareas:
1. Mostrar el precio y la ubicación del producto.
2. Calcular cuántas unidades quedan en stock.
3. Cambiar el nombre del producto.
4. Agregar una nueva reseña.
5. Extraer categoría y puntuación de la primera reseña.
6. Mostrar el producto actualizado.*/

const producto = {
  datos: {
    nombre: "Laptop",
    categoria: "Electrónica",
    precio: 1200
  },
  stock: {
    cantidad: 50,
    vendidos: 30,
    ubicacion: "Aisle 3"
  },
  reseñas: [
    { usuario: "Alice", comentario: "Excelente producto", puntuacion: 5 },
    { usuario: "Bob", comentario: "Buen rendimiento", puntuacion: 4 }
  ]
};

console.log(producto.datos.precio);
console.log(producto.stock.ubicacion);
const unidadesRestantes = producto.stock.cantidad - producto.stock.vendidos;
console.log(unidadesRestantes);
producto.datos.nombre = "Laptop Pro";
producto.reseñas.push({ usuario: "Charlie", comentario: "Muy buena calidad", puntuacion: 5 });
const { categoria, puntuacion } = producto.reseñas[0];
console.log(producto);




