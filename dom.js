// aqui se pone en practica DOM

const titulo = document.getElementById("titulo");
console.log(titulo);

const div1 = document.getElementsByClassName("div1");
console.log(div1);

const li = document.getElementsByTagName("li");
console.log(li);

for (let elementos of li) {
    console.log(elementos);
}

const p = document.createElement("p");
p.textContent = "Aprobame que lo saco adelante de a poco";

console.log(p);

const contenedor = document.getElementById("contenedor");

contenedor.appendChild(p);

p.style.color = "red";
p.style.fontSize = "40px";
