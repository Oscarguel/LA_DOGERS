function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        alert("El campo nombre no puede estar vacío");
        return false;
    }
    return true;
}