/*
llamar una etiquta llamada miArray, y entre[los indices]
tipo de dato: objeto
puede ocupar muchos tipos de texto: buleano, none, indifined, string, number
*/
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
siempre se cuenta desde 0, así pera seria posicion 1, fresa posicion 3
 */
let frutas = ["manzana", "pera", "mango", "fresa", "uva"];

console.log(frutas[0]);
console.log(frutas[2]); /*mango */

/* muestra la cantidad de elementos desde 1*/ 
console.log(frutas.length); 

let nombres = ["Melisa", "Sara", "Johan", "Gabriela"];
console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);
console.log(nombres[4]); /**muestra que es indefinido sin el lenght */

/*
pueden contener varios tipos de texto
*/
let datos = ["Gabriela", 30, null, true]

/* Metodos de los Arrays*/
/*
MUTABILIDAD
cambiar la posicion 0 de Melisa a Esteban
*/
let nombres1 = ["Melisa", "Sara", "Johan", "Gabriela"];
nombres1[0] = "Esteban";
console.log(nombres1);
nombres1[3] = "Natalia";
console.log(nombres1);

/**
 METODO push. Agrega 1 o varios elementos al final
 */
nombres1.push("Gabriela", "Jarrison");
console.log(nombres1);

/**
 METODO pop. Elimina el ultimo elemento del Array
 */
nombres1.pop();
console.log(nombres1);

/**
 METODO unshift. agrega el elemento a la posicion 0
 */
 nombres1.unshift("Yuliceth");
 console.log(nombres1);

 /**
 METODO shift. elimina el elemento a la posicion 0
 */
 nombres1.shift();
 console.log(nombres1);

 /**
 METODO indexOF. busca un elemento y devuelve su posicion
 */
 console.log(nombres1.indexOf("Sara"));
 console.log(nombres1.indexOf("Gabriela"));
 console.log(nombres1.indexOf("Yuliceth")); 

  /**
 METODO splice. Recibe 3 argumentos:
 1. desde donde se quiere acceder
 2. cantidad de elementos a eliminar
 3. cantidad de elementos a agregar
 */
 let frutas1 = ["manzana", "pera", "mango", "fresa", "uva"];
/**en la posicion 2, elimina 1 y agrega melon */
frutas1.splice(2, 1, "melon");
console.log(frutas1); 
frutas1.splice(2, 2, "melon", "sandia");
console.log(frutas1); 

 /**
 METODO slice. Copia un Array
 */
let copiaFrutas = frutas1.slice(0,2);
/**muestra las posiciones 0 y 1, 2 es el limite */
console.log(copiaFrutas); 

 /**
 METODO sort. Reordena los elementos de un Array
 */
let numeros1 = [1, 5, 3, 7, 2, 9, 4, 6, 8, 10]
numeros1.sort((a, b) => a - b);
console.log(numeros1);

/**
 * CICLOS
 */
/**
 *CICLO for.
 for(let i = 0; i < numeros1.length; i++){
    console.log(numeros1[i]);
}
 */
/**generar los numeros de 1 - 10 . 
  1. i=1 xq los n. inician en 1
2. condicion, mientras i sea menor o = a 10
3. pasos, aumentar la variable en una unidad i++
  */
for(let i = 1; i <= 10; i++){
    console.log(i);
}
/**generar los numeros de 1 - 10 .
*/
for(let j = 1; j <= 5; j++){
    console.log(j);
}
/**numeros pares entre 0 - 10*/
for(let j = 0; j <= 10; j++){
    if( j % 2 === 0){ /**aplicamos una condicion para los pares*/
        console.log(j);
    }
}

/**Para recorrer un array con for */
for(let i = 0; i < nombres1.length; i++){
    console.log(nombres1[i]);
}

/**
 CICLO while.
 1. codigo a ejecutar
 2. cambia la condicion para salir del ciclo
 */
let numero = 1;
while(numero <= 10){
    console.log(numero);
    numero++;
}

/*
let edad = parseInt(prompt("Ingrese su edad"))

while(edad > 18 || edad <= 0){
    edad = parseInt(prompt("Ingerese un valor correcto:"))
}
console.log("Gracias por ingresar su edad.")
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;

while(i < array.length){
    console.log(array[i]);
    i++;
}

const array1 = ["Melisa", "Sara", "Johan", "Gabriela", "Jarrison", "Esteban"];
let j = 0;

while(j < array1.length){
    console.log(array1[j]);
    j++;
}

/**
 CICLO do while.
 */
let k = 0;

do{
    console.log(k);
    k++;
}while(k <= 5)

/** */
const colores = ["amarillo", "azul", "rosado", "verde", "naranja"]
let l = 0;

do{
    console.log(colores[l]);
    l++;
}while(l < colores.length)