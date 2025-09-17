const verduras = [
    "brocoli","cebolla","chile","tomate"]
console.log(`elimina el ultimo elemento:${verduras.pop()}`);

console.log(verduras);

verduras.unshift("tomate");
console.log(verduras);

verduras.unshift("lechuga");
console.log(verduras);
verduras.shift();
console.log(verduras);

verduras.push("zanahoria");
console.log(verduras);


//////ejercicio//

let mochila = ["Espada","Escudo","Pocion de vida"];
mochila.push("Arco");
let arco = mochila[mochila.length - 1];
console.log("La ultima posicion es:", arco);

mochila.unshift("posion magica");
console.log("se encontro una posion y ahora esta en la primera posicion:", mochila[0]);

console.log(mochila);


//////ejercicio 2//

mochila.shift();
console.log("se uso la primera posion ", mochila);


mochila.pop();
console.log("se perdio el ultimo objeto", mochila);
console.log(mochila);

//ejercicio 3//

mochila.push("2flechas")
console.log("se ecnontro 2 flechas", mochila);

mochila.unshift("casco");
console.log("se encontro un casco y ahora esta en la primera posicion:", mochila[0]);
console.log(mochila);

mochila.shift()
console.log("se uso el primer obejto", mochila);
mochila.pop();
console.log("se uso el ultimo objeto", mochila);
console.log(mochila);

//ejercicio 4//
let carrito = [
    {nombre: "espada", poder: 50, cantidad: 1},
    {nombre: "escudo", poder: 30, cantidad: 1},
    {nombre: "pocion de vida", poder: 20, cantidad: 2}
]

