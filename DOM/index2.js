function agregarDatos(){
    const dato = prompt("Ingrese un dato");

    if(dato){
        const datosDiv =document.getElementById("datos");

        const nuevoDato =document.createElement("p");
        nuevoDato.textContent = dato;

        /*PADRE.appendChild(HIJO); */
        datosDiv.appendChild(nuevoDato);
    }
}
