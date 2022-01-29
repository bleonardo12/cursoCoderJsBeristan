// variables
const carrito = document.getElementById("carrito");
const platillos = document.getElementById("lista-platillos");
const listaPlatillos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
    platillos.addEventListener("click", comprarPlatillo);
    carrito.addEventListener("click", eliminarPlatillo);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
    document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarPlatillo(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const platillo = e.target.parentElement.parentElement;
        leerDatosPlatillo(platillo);
    }
}

function leerDatosPlatillo(platillo) {
    const infoPlatillo = {
        imagen: platillo.querySelector("img").src,
        titulo: platillo.querySelector("h4").textContent,
        precio: platillo.querySelector(".precio span").textContent,
        id: platillo.querySelector("a").getAttribute("data-id"),
    };

    insertarCarrito(infoPlatillo);
}

function insertarCarrito(platillo) {
    const row = document.createElement("tr");
    row.innerHTML = `
       <td>
           <img src="${platillo.imagen}" width=100> 
       </td> 
       <td>${platillo.titulo}</td>
       <td>${platillo.precio}</td>
       <td>
        <a href="#" class="borrar-platillo" data-id="${platillo.id}">X</a>
       </td>
    `;
    listaPlatillos.appendChild(row);
    guardarPlatilloLocalStorage(platillo);
}

function eliminarPlatillo(e) {
    e.preventDefault();

    let platillo, platilloId;

    if (e.target.classList.contains("borrar-platillo")) {
        e.target.parentElement.parentElement.remove();
        platillo = e.target.parentElement.parentElement;
        platilloId = platillo.querySelector("a").getAttribute("data-id");
    }
    eliminarPlatilloLocalStorage(platilloId);
}

function vaciarCarrito() {
    while (listaPlatillos.firstChild) {
        listaPlatillos.removeChild(listaPlatillos.firstChild);
    }
    vaciarLocalStorage();

    return false;
}

function guardarPlatilloLocalStorage(platillo) {
    let platillos;

    platillos = obtenerPlatillosLocalStorage();
    platillos.push(platillo);

    localStorage.setItem("platillos", JSON.stringify(platillos));
}

function obtenerPlatillosLocalStorage() {
    let platillosLS;

    if (localStorage.getItem("platillos") === null) {
        platillosLS = [];
    } else {
        platillosLS = JSON.parse(localStorage.getItem("platillos"));
    }
    return platillosLS;
}

function leerLocalStorage() {
    let platillosLS;

    platillosLS = obtenerPlatillosLocalStorage();

    platillosLS.forEach(function (platillo) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${platillo.imagen}" width=100>
            </td>
            <td>${platillo.titulo}</td>
            <td>${platillo.precio}</td>
            <td>
                <a href="#" class="borrar-platillo" data-id="${platillo.id}">X</a>
            </td>
        `;
        listaPlatillos.appendChild(row);
    });
}

function eliminarPlatilloLocalStorage(platillo) {
    let platillosLS;
    platillosLS = obtenerPlatillosLocalStorage();

    platillosLS.forEach(function (platilloLS, index) {
        if (platilloLS.id === platillo) {
            platillosLS.splice(index, 1);
        }
    });

    localStorage.setItem("platillos", JSON.stringify(platillosLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}

// JQUERY

$("#btn-hide").click(function () {
    $("#lista-platillos").fadeIn(2000);
});

$("#btn-show").click(function () {
    $("#lista-platillos").fadeOut(2000);
});

$("h4").css("background-color", "yellow");
$("h4").css("width", "50%");
$("h4").css("font-size", "20px");
$("h4").css("color", "black");
$("h4").css("text-align", "center");

// AJAX CON JQUERY

// incorporar evento click en el boton submit

$("submitBtn").click(function () {
    let name = $("#name").val();
    let email = $("#email").val();
    let contact = $("#cont").val();
    let profile = $("#profile").val();

    $.post(
        "http://localhost:4000/api/addPerson",
        {
            name: name,
            email: email,
            cont: contact,
            profile: profile,
        },
        function (response) {
            $("#response").html(
                "<div class='alert alert-success'>" +
                    response.message +
                    "</div>"
            );
            clearfield();
        }
    );
});

function clearfield() {
    $("#name").val("");
    $("#email").val("");
    $("#cont").val("");
    $("#profile").val("");
}

// MAPA
function iniciarMap() {
    var coord = { lat: -34.6409323, lng: -58.507516 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: coord,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
}

// animaciones

logo.onclick = function () {
    let start = Date.now();

    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        logo.style.left = timePassed / 3 + "px";

        if (timePassed > 2000) clearInterval(timer);
    }, 20);
};
