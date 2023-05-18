/**Local Storage
 * Podemos guardar datos clave valor en el navegaddor del usuario
 * Para que sirve:
 * Para almacenar datos en el navegador: localStorag.setItem("clave", "valor");
 * Para obtener datos de ls: let dato = localStorage.getItme("clave");
 * Para eliminar datos de ls: localStorage.removeItme("clave");
 * Para eliminar todos datos de ls: localStorage.clearItme("clave"); 
*/

/**Guardar datos */

localStorage.setItem('nombre', 'Sara');
localStorage.setItem('apellido', 'Sandoval');

/**Obtener datos */
const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem('apellido');

console.log(nombre, apellido);

/**Almacenar la preferencia de tema oscuro */
localStorage.setItem('tema', 'oscuro');

/**Recuperar la preferencia del tema oscuro */
const tema = localStorage.getItem('tema');

console.log(tema);
