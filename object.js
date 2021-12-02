let indumentariaMujer = {
    name: "calzas",
    talle: "s",
    color: "negro",
    valor: 1200,
    marca: "nike",
    stock: 2,
};

let indumentariaMujerA = {
    name: "calzas",
    talle: "m",
    color: "negro",
    valor: 1200,
    marca: "nike",
    stock: 2,
};

let indumentariaMujerB = {
    name: "calzas",
    talle: "xl",
    color: "negro",
    valor: 1200,
    marca: "nike",
    stock: 1,
};

let indumentariaCamisetaA = {
    name: "camiseta",
    talle: "s",
    color: "blanca y celeste",
    valor: 1200,
    marca: "ajax",
    stock: 1,
};

let indumentariaCamisetaB = {
    name: "camiseta",
    talle: "m",
    color: "negra",
    valor: 1200,
    marca: "River",
    stock: 1,
};

let indumentariaCamisetaC = {
    name: "camiseta",
    talle: "xl",
    color: "blanca y celeste",
    valor: 1200,
    marca: "Japón",
    stock: 1,
};

let indumentariaCamisetaD = {
    name: "camiseta",
    talle: "s",
    color: "negra",
    valor: 1200,
    marca: "Alemania",
    stock: 1,
};

// OBJETOS CON CONSTRUCTOR

function indumentaria(marca, talle, color, valor, stock) {
    this.marca = marca;
    this.talle = talle;
    this.color = color;
    this.valor = valor;
    this.stock = stock;
}

let calzas = new indumentaria("Nike", "S", "blanca y negra", 1500, 4);

console.log("La calza que hay en stock es de marca: " + calzas.marca);

alert("Ingrese los datos de la indumentaria que desea cargar: ");

let marcaCalza = prompt("Ingrese la marca de la calza");
let talleCalza = prompt("Ingrese el talle de la calza");
let colorCalza = prompt("Ingrese el color de la calza");
let valorCalza = prompt("Ingrese el valor de la calza");
let stockCalza = prompt("Ingrese el stock de la calza");

let calza = new indumentaria(
    marcaCalza,
    talleCalza,
    colorCalza,
    valorCalza,
    stockCalza
);

console.log(calza);

FOR IN

function indumentaria(calza, stock, valor) {
    this.calza = calza;
    this.stock = stock;
    this.valor = valor;

    this.talle = function () {
        alert(this.calza + ": talle S");
    };
    this.stockDuplicado = function () {
        return this.stock * 2;
    };
}

let calzaNike = new indumentaria("calza Nike", 10, 3000);
calzaNike.talle();
let calzaAdidas = new indumentaria("calza Adidas", 20, 3200);
calzaNike.talle();
let calzaRebook = new indumentaria("calza Rebook", 23, 3400);
calzaNike.talle();

for (let datos in calzaAdidas) {
    console.log(calzaAdidas[datos]);
}

CLASES

class indumentaria {
    constructor(marca, talle, color, precio, stock) {
        this.marca = marca;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }

    calza() {
        alert(this.marca + " " + this.stock);
    }
}

let nuevaIndumentaria = new indumentaria("Diadora", "S", "Rosa", 2000, 20);

console.log(nuevaIndumentaria);
nuevaIndumentaria.calza;

ARRAY
let indumentaria = [
    "Calzas",
    "Buzos",
    "Camisetas",
    "Medias",
    "Top",
    "Zapatillas",
];
// let marcas = ["Adidas", "Nike", "Rebook", "Diadora", "Puma"];

console.log(indumentaria);

for (let i = 0; i < indumentaria.length; i++) {
    console.log(
        "En la vuelta numero " + i + " indumentaria: " + indumentaria[i]
    );
}

FOR + PUSH

let nombreAlumno;
let alumnos = [];

for (let i = 0; i < 5; i++) {
    let nombreAlumno = prompt("Ingrese el nombre del alumno");
    alumnos.push(nombreAlumno);
}

console.log(alumnos);
alumnos.push("Carlos");
console.log(alumnos);

NESTED ARRAYS
ARRAY ORDENADO

let indumentaria = [
    {
        producto: "Calzas",
        talle: "S",
        color: "Negra",
        precio: 2200,
        stock: 20,
    },
    {
        producto: "Calzas",
        talle: "M",
        color: "Azul",
        precio: 2200,
        stock: 3,
    },
    {
        producto: "Calzas",
        talle: "L",
        color: "Azul",
        precio: 2200,
        stock: 4,
    },
    {
        producto: "Buzos",
        talle: "S",
        color: "River",
        precio: 3400,
        stock: 2,
    },
    { producto: "Buzos", talle: "M", color: "River", precio: 3400, stock: 4 },
    { producto: "Buzos", talle: "L", color: "River", precio: 3400, stock: 7 },
    { producto: "Buzos", talle: "XL", color: "River", precio: 3400, stock: 3 },
    { producto: "Camiseta", talle: "S", color: "Ajax", precio: 3000, stock: 1 },
    {
        producto: "Camiseta",
        talle: "XL",
        color: "Bayer Munich",
        precio: 3100,
        stock: 1,
    },
    {
        producto: "Camiseta",
        talle: "L",
        color: "Racing",
        precio: 3400,
        stock: 3,
    },
];

indumentaria.sort((a, b) => {
  if (a.producto < b.producto) {
      return -1;
  }
  if (a.producto > b.producto) {
      return 1;
  }
  return 0;
});

console.log(indumentaria);

// ARRAY ORDENADO 2
class indumentaria {
    constructor(marca, talle, color, precio, stock) {
        this.marca = marca;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
}

const listaDeIndumentaria = [];

for (let i = 0; i < 2; i++) {
    let producto = prompt("Ingrese el producto de indumentaria: ");
    let marca = prompt("Ingrese la marca: ");
    let talle = prompt("Ingrese el talle: ");
    let color = prompt("Ingrese el color: ");
    let precio = prompt("Ingrese el precio: ");
    let stock = prompt("Ingrese el stock: ");

    listaDeIndumentaria.push(
        new indumentaria(producto, marca, talle, color, precio, stock)
    );
}

for (let indumentaria of listaDeIndumentaria) {
    console.log(indumentaria.producto);
}

listaDeIndumentaria.sort((a, b) => {
    if (a.producto < b.producto) {
        return -1;
    }
    if (a.producto > b.producto) {
        return 1;
    }
    return 0;
});

console.log(listaDeIndumentaria);
