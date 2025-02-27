function mostrarMensaje() {
    // pedir valores
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let lenguaje = document.getElementById("lenguaje").value;

    // validar que se ingresen los datos, si los campos estan vacios no avanza
    if (nombre === "" || edad === "" || lenguaje === "") {
        alert("Compruebe que están completos los campos.");
        return;
    }

    // mostrar mensaje del div oculto
    let mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}! que emoción!😁✨`;
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.style.display = "block";
}
