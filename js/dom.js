const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    console.log("Gracias por su compra");
});

boton.addEventListener("mouseover", saludar);

function saludar() {
    console.log("Mouse move");
}

boton.addEventListener("mousedown", function (e) {
    console.log(e.button);
    if (e.button == 0) {
        console.log("BOTON IZQ");
    } else if (e.button == 1) {
        console.log("boton ruidita");
    } else if (e.button == 2) {
        console.log("Boton derecha");
    }
});

let botonForm = document.getElementById("botonForm");
botonForm.addEventListener("click", function () {
    const usuario = document.getElementById("usuario");
    const pass = document.getElementById("pass");
    console.log(usuario);
    console.log(pass);
});

const botonComprar = document.querySelectorAll("botonComprar");
console.log("botonComprar");
