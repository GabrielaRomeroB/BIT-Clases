//TALLER EN CLASE

let precioBase = parseInt(prompt("Ingrese el precio base de su compra:"))
let descuento = parseInt(prompt("Ingrese el valor de descuento a aplicar a su compra:"))

function calcularPrecio(precioBase, descuento){ 
    if(precioBase <= 0 || descuento < 0 || descuento > 100 ){ 
        return "Los valores ingresados son inválidos, intente otra vez"
    }else if(descuento == 0){ 
        return "Su precio final con el descuento es: " + precioBase
    }else if(descuento > 0 || descuento < 100){ 
        return "El precio final con descuento es $" + precioBase * ( 1 - (descuento / 100 ))
    }
}

console.log(calcularPrecio(precioBase, descuento))