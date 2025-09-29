const numero = [10,20,30,40,50]

const meses = new Array('Enero', 'Febrero', 'Marzo');

const deTodo =['hola',10,null,true,undefined,{nombre:'juan',trabajo:'programador'},new Date()];

console.table(numero);
console.table(deTodo)
console.log(deTodo[3])
console.log(deTodo[5].nombre)

numero[1] = 69;
console.table(numero)

meses.push('Abril');
console.table(meses)

meses.pop();
console.table(meses)

meses.shift();
console.table(meses)

meses.unshift('Enero');
console.table(meses)

for(i=0;i<meses.length;i++){
    console.log(meses[i])
}

numero.splice(2,0,100);
console.log(numero);

//imprimir el rimer numero y el ultimo dia de la semana

const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
let primer = dias[0];
let ultimo = dias[dias.length -1];
console.log(ultimo);

