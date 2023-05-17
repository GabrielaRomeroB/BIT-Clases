function agregarClase() {
    const miTitulo = document.getElementById("titulo");
    miTitulo.classList.add("destacado");

    const miParrafo = document.getElementById("parrafo");
    miParrafo.classList.add("oculto");
}

function quitarClase() {
    const miTitulo = document.getElementById("titulo");
    miTitulo.classList.remove("destacado");

    const miParrafo = document.getElementById("parrafo");
    miParrafo.classList.remove("oculto");
}