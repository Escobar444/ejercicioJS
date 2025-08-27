//const nombre = "Eli"
//const edad = 30;
//const altura = 1.50;


//cracion de objetos con object literal
const persona = {
    nombre: "Eli",
    edad: 30,
    altura: 1.50
};
//imprimir
console.log(persona);

//acceder a las propiedaddes del objeto
// acceso por punto
console.log(persona.nombre)
//acceso por corchetes
console.log(persona["edad"]);
//agregar nuevas propiedades
persona.nacionalidad = "peruana"
console.log(persona);
//eliminar las propiedades de un objeto
delete persona.altura;
console.log(persona);

//modificar las propiedades
persona.nombre = "Elias";
console.log(persona);

//asignar el valor del objeto a una variable
const nom = persona.nombre;
console.log(nom);

////////////////////
//destructuring
//const { nombre } = persona;
//console.log(nombre);

//onst { edad } = persona;
//console.log(edad);

const { nombre, edad } = persona;
console.log(nombre)
console.log(edad);

///ejercicios

//cracion de objetos con object literal
const animal = {
    Raza: "EHuskyi",
    tamaño: "Mediano",
    color: "Gris"
};

//imprimir
console.log(animal);
const { Raza, tamaño, color } = animal;
console.log(Raza);
console.log(tamaño);
console.log(color);

////2.
animal.sexo = "Macho";
console.log(animal);
delete animal.Raza;
console.log(animal);

//3.
//cracion de objetos con object literal
const Usuario = {
    usuario: "Adelio",
    email: "adelio@example.com",
    rol: "admin"
};
console.log(Usuario);
//destructuring
const { usuario, email, rol } = Usuario;
console.log(usuario);
console.log(email);
console.log(rol);
