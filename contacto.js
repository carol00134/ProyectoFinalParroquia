function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }

    if (mensaje === "") {
        alert("Por favor, ingresa tu mensaje.");
        return false;
    }

    return true;
}