function mostrarImagen() {
    const imagenURL = prompt("Ingrese la URL de la imagen")


if(imagenURL){
    const containerDiv = document.getElementById("contenedorImg");

    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = imagenURL;

    containerDiv.appendChild(nuevaImagen);
}
}