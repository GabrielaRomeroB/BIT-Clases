//scope global
/*
let nombre = "Gabriela";
function saludar(){ 
    console.log(`hola ${ nombre}`)
}
saludar();
*/

//scope local
/*
function saludo(){ 
    let nombre = "Johan";
    console.log(`hola ${ nombre}`);
}

saludo();

console.log(nombre);
*/

//operadores de asignación y comparacion
//console.log(2 + 3);
 
//ooperador de residuo
//console.log(5 % 2);

//operador de incremento y decremento
/*
let a = 3;
let b = 3;

console.log(a++);
console.log(++b);
console.log(a);
console.log(b);
*/

//operadores de comparacion. Compara y devuelve un valor logico
//== igual y === estrictamente igual. = asignación
//console.log (5 == "5"); 

//operadores desigualdad
//console.log (3 !== "3"); //estrictamente diferente

//mayor y menor que
/*
console.log (3 < 5);
console.log (3 > 5);
console.log (3 >= 5);
console.log (3 >= 2);
*/

//condicionales, estructuras de control que permiten relizar difrentes ops en js
/*
let edad = 14;
if(edad <= 18){
    console.log("puedo conducir!")
 } else { //si no, haga esto
    console.log("no puede conducir")
 }

 if(condition){ 
    //seleccion principal
 }else if(){ 
    //seleccion secundaria
 }else if{ 

 }else { }
*/

/*EJERCICIO
un cliente solicita un descuento segun el n de art que compra
la tienda ofrece 3 descuentos: 10% hasta 5, un 15% hasta 10, 20% mas de 10.

function calcularDescuento(articulos, precio){ 
    let preciofinal

    if(articulos <= 5){ 
        preciofinal = precio * (1 - 0.1);
        console.log
    }else if(articulos > 5 && articulos <=10){ 
        preciofinal = precio * (1 - 0.15);
    }else { 
        preciofinal = precio * (1 - 0.2);
    }

    return preciofinal;
}    

    console.log(calcularDescuento(5, 1000));
    console.log(calcularDescuento(8, 4000));
    console.log(calcularDescuento(15, 7000));



function calcularDescuento(articulos){ 
    let descuento;

    if(articulos <= 5){ 
        preciofinal = precio * (1 - 0.1);
        console.log
    }else if(articulos > 5 && articulos <=10){ 
        preciofinal = precio * (1 - 0.15);
    }else { 
        preciofinal = precio * (1 - 0.2);
    }

    return preciofinal;
}    

    console.log(calcularDescuento(5, 1000));
    console.log(calcularDescuento(8, 4000));
    console.log(calcularDescuento(15, 7000));
*/

/*
OTRO EJEMPLO
const numero = parseInt(prompt("ingrese un número")) 
//promt, abre un cuadro de llenar info
//parseInt, cambia el tipo ed dato a entero
function mostrarSiEsPar(num){ 
    if(num % 2 === 0){ 
        return "el número es par"
    }else{ 
        return "el número es impar"
    }
}
console.log(mostrarSiEsPar(numero));

*/

//TALLER EN CLASE
let precioBase = parseInt(prompt("Ingrese el precio base de su compra:"))
let descuento = parseInt(prompt("Ingrese el valor de descuento a aplicar a su compra:"))

function calcularPrecio(precioBase, descuento){ 
    if(precioBase <= 0 || 0 > descuento > 100 ){ 
        return "Los valores ingresados son inválidos, intente otra vez"
    }else if(descuento == 0){ 
        return "Su precio final con el descuento es: " + precioBase
        
    }
}

console.log(calcularPrecio(precioBase, descuento))

    

