// Desafio 1
// const nombreUsuario = prompt("Ingrese su nombre");
// const ingreseCuit = prompt("Cuit/Cuil");
// const montoFinal = prompt("Ingrese monto final");
// const porcentajeDivisor = prompt("Ingrese numero divisor");
// const total = (montoFinal * porcentajeDivisor) / 100;

// alert("Resultado:" + total);

//Desafio 2

// const nombreUsuario = prompt("Ingrese su nombre y apellido");
// const edadUsuario = prompt("Ingresa tu edad");
// const documentoIdentidad = prompt("Ingrese su Dni");

// if (edadUsuario >= 16) {
//     alert("Puede votar");
// } else {
//     alert("No puede votar");
// }

// Notas del colegio

// notas mayor o igual a 7 aprobado
// notas entre 7 y 4 va a recuperatorio
// let nota = prompt("Ingrese la nota");
// if (nota >= 7) {
//     console.log("Aprobado");
// } else if (nota >= 4) {
//     console.log("Recuperatorio");
// } else {
//     console.log("Desaprobado");
// }

// programa que pida dos numeros y los sume: informe si la suma es mayor, igual o menor a 100

// let numeroA = prompt("ingrese un numero");
// let numeroB = prompt("ingrese otro numero");

// let suma = parseInt(numeroA) + parseInt(numeroB);

// console.log(suma);

// if (suma > 100) {
//     console.log("Es mayor");
// } else if (suma < 100) {
//     console.log("Es menor");
// } else {
//     console.log("Es igual");
// }

// CREAR UN PROGRAMA QUE PIDA USUARIO Y CONTRASEÑA
// SI EL USUARIO ESTA REGISTRADO LO DEJO INGRESAR AL SISTEMA
// EL UNICO USUARIO REGISTRADO ES usuario=pepe password=1234

// let usuarioRegistrado = "Pepe";
// let usuarioRegistrado2 = "Jose";
// let passRegistrado = 1234;

// let usuario = prompt("Ingrese su nombre de usuario");
// let password = prompt("Ingrese su contraseña");

// if( (usuario == "Pepe" && password == 1234) || (usuario == "Jose" && password == 1234)

// console.log(`Bienvenido al sistema: ${usuario}`);
// }

// clase 3 y 4 bucles
// const usuarioReg = "Juan Carlo";
// const passReg = "1234";
// const error = 0;

// for (let i = 0; i < 10; i = i + 1) {
//     const usuario = prompt("Ingrese su usuario");
//     const pass = prompt("Ingrese su contraseña");
//     if (usuario == usuarioReg && pass == passReg) {
//         console.log("Bienvenido al sistema");
//         break;
//     } else {
//         console.log("Error:" + i);
//         error = error + 1;
//         if (error == 3) {
//             console.log("Chau tarjeta");
//             break;
//         }
//     }
// }

// CREAR UN PROGRAMA PARA LA VOTACION DE UN CLUB DE BARRIO
// NO SE SABE CUANTAS PERSONAS VAN A VOTAR (USAR CONDICION POR EJ. USUARIO == ESC PARA FINALIZAR)
// SE PUEDE VOTAR POR EL PARTIDO A Y B

// var nombreUsuario = prompt("Ingrese su nombre");
// let voto = prompt("Ingrese su vot A o B");

// while (voto != "ESC") {
//     console.log("Voto por:" + voto);
//     voto = prompt("Ingrese su voto:A o B");
// }

// clase 4
// function saludar() {
//     let usuario = prompt("Ingrese su nombre");
//     let edad = prompt("Ingrese su edad");
//     console.log("Hola " + usuario);
//     console.log("Usted tiene: " + edad + "años");
// }

// saludar();

// function suma() {
//     let numeroA = parseInt(prompt("Ingrese numero A"));
//     let numeroB = parseInt(prompt("Ingrese numero B"));
//     let total = numeroA + numeroB;
//     console.log("El total es: " + total);
// }

// // suma();
// function saludar(nombreUsuario, edadUsuario) {
//     console.log("HOLA " + nombreUsuario);
// }
// function anioNacimiento(edad) {
//     edad = parseInt(edad);
//     console.log(2021 - edad);
// }
// let usuario = prompt("Ingrese su nombre de usuario");
// let edad = prompt("Ingrese su edad");

// saludar(usuario);
// anioNacimiento(edad);

// function validarNombre(nombreUsuario) {
//     if (nombreUsuario != "") {
//         console.log("TODO OK");
//     } else {
//         console.log("STRING VACIO");
//     }
// }

// let usuario = prompt("ingrese su usuario");
// validarNombre(usuario);

// function validarEdad(edadUsuario) {
//     if (edadUsuario >= 18) {
//         console.log("OK");
//     } else {
//         console.log("NO PUEDE INGRESAR");
//     }
// }
// let edad = parseFloat(prompt("Ingrese su edad"));

// validarEdad(edad);

// CREAR UN PROGRAMA QUE CALCULE LOS DESCUENTOS EN UN PRECIO
// DESCUENTO : LUNES 5%, MIERCOLES 15%, SABADO 20%.
// IVA : 21 % SOBRE PRECIO;
// CALCULAR EL PRECIO FINAL

// function descuento(precio) {
//     if (dia == "Lunes") {
//         let = descuentoPrecio = precio * 0.05;

//         return descuentoPrecio;
//     } else if (dia == "Miercoles") {
//         let = descuentoPrecio = precio * 0.15;

//         return descuentoPrecio;
//     } else if (dia == "Sabado") {
//         let = descuentoPrecio = precio * 0.2;

//         return descuentoPrecio;
//     }
// }

// function iva( precio ){
//   let iva = precio * 0.21;
//   precio = precio + iva;
//   return = precio;
// }

// let numeroA = parseInt("Ingrese el monto");
// let dia = prompt("Ingrese el dia de la compra");

// let resultado = ( precio - descuento(precio, dia)) + iva
// console.log(resultado);
