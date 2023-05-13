//comentario de 1 linea//

/* comentario de varias lineas
 */

// mostrar por consola

console.log("Hola Mundo!")

var nombre "Gabriela";
// var ya no se usa, en la version 6 de Java se usa:

let apellido="RB";
const PI="3.1416";

console.log(nombre);

let edad = 20;
let casado = false;

//typeof : nos muestro el tipo de variable
console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(casado));

//camelcase
let EstoEsUnNombre = "Gabriela";

// Funciones
function suma(a, b) { //a y b son los parametros de la funcion, estos son opcionales
    return a + b;
}

console.log(suma(4, 5));

suma(4,5); //el () indica la funcion que estamos llamando

let resultado1 = suma(2, 5)
let resultado2 = suma(10, 15)
let resultado3 = suma(115, 150)

console.log("resultado1" + resultado1)

console.log("resultado2" + resultado2)

console.log("resultado3" + resultado3)


//otro ejemplo
function saludar(nombre){ 
    return "Hola" + nombre;
}

console.log(nombre("Gabriela"))

//plantillas literales
console.log(`hola ${ nombre}`); // el signo $ me llama una funcion
//console.log("hola" + nombre);
