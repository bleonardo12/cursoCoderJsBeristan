// pedir un numero 8 veces mediante prompt y multiplicarle 2 en cada repeticion, mostrando el resultado por consola, usando for

// Solicitamos un numero al usuario
// let ingreseNumero = parseInt(prompt("Ingrese un numero"));
// // En cada repetición multiplicamos el numero por 2,
// let producto = 1;
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingreseNumero * i;

//     alert(ingreseNumero + " X " + i + " = " + resultado);
// }

// pedir un texto por consola, concatenar un valor en cada iteracción realizando una salida por resultado hasta que se ingresa ESC - ejercicio while

// let texto = prompt("Ingrese una palabra");
// let resultado = texto;
// let textoConcatenar = " ";

// while (textoConcatenar != "ESC") {
//     textoConcatenar = prompt(
//         "Ingrese una palabra para concatenar a la inicial"
//     );
//     resultado = resultado + " " + textoConcatenar;
//     console.log(resultado);
// }

// solicitar un numero y detenerse cuando no se trate de un numero; ejercicio do while

// let = 0;
// do {
//     // repetimos con do...while mientras se ingrese un number
//     numero = prompt("Ingrese un numero entero");
//     console.log(numero);
//     // Si el ingreso no resulta un numero, se interrumpe el ciclo
// } while (parseInt(numero));

// Solicitar al usuario que ingrese el precio de costo del producto al cual se le va a aplicar el iva
// while (true) {
//     var precioCosto = parseFloat(
//         prompt("Ingrese el precio de costo del producto")
//     );

//     if (!isNaN(precioCosto) && precioCosto != null && precioCosto != "") {
//         // alert('es numero');
//         break;
//     } else {
//         alert("no es numero");
//         continue;
//     }
// }
// precioCostoM = precioCosto.toFixed(2);
// alert("El precio del producto a calcular es: " + precioCostoM);
// console.log("El precio del producto a calcular es: " + precioCostoM);

// // sumar IVA al producto
// function calcularIva(precioCosto) {
//     return precioCosto * 0.21;
// }

// var iva = calcularIva(precioCosto);
// ivaM = iva.toFixed(2);

// alert("El IVA del producto ingresado es: " + ivaM);
// console.log("El IVA del producto ingresado es: " + ivaM);

// // Sumarle el iva al precio del producto con IVA
// function sumarIva(precioCosto) {
//     return precioCosto + precioCosto * 0.21;
// }

// var precioConIva = sumarIva(precioCosto);
// precioConIvaM = precioConIva.toFixed(2);

// alert("El precio del producto con IVA incluido es: " + precioConIvaM);
// console.log("El precio del producto con IVA incluido es: " + precioConIvaM);

// // calcular precio sugerido de venta
// function calcularPrecioVenta(precioConIva) {
//     return precioConIva * 1.25;
// }
// var precioVenta = calcularPrecioVenta(precioConIva);
// precioVentaM = precioVenta.toFixed(2);

// alert("El precio sugerido de venta del producto es: " + precioVentaM);
// console.log("El precio sugerido de venta del producto es: " + precioVentaM);
