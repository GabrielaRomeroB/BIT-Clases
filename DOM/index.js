/*console.log(document)
*/

/**
 *getElementById, getElementByTagName, getElementByClassName, querySelector, 
 *//**
  * getElementById. busca un elemento en el DOM utilizando su ID
 innerHTML. contiene el contenido HTML 
 */
let tittle = document.getElementById("titulo");
tittle.innerHTML = "Hola mundo, desde el DOM";
console.log(tittle.innerHTML);

/**
 *EVENTOS. Cualquier accion que ocurre en una pg web, scrooll down
 addEventListener("click", () => {
    console.log("click");
 });
 */
 const boton = document.getElementById("miBoton");
 const parrafo = document.getElementById("etiqueta");

 boton.addEventListener("click", function(){
    parrafo.innerHTML = "Haz hecho click en el boton"
 });
