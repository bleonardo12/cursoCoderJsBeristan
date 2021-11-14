/////////////////////////////
//EJERCICIOS PROMPT Y ALERT//
/////////////////////////////

//1) Pedir nombre al usuario y saludarlo por pantalla con el nombre que haya escrito. Ejemplo: si el nombre es Pablo devuelve "¡Hola, Pablo!"

/* 
const nombre = prompt("Escriba su nombre");
alert(`¡Hola, ${nombre}!`);
 */

//2) Pedir el nombre, el apellido, el número de horas trabajadas y el costo por hora. Debe devolver por consola un texto con su nombre completo y la paga correspondiente.

/* 
const nombre = prompt("Escriba su nombre");
const apellido = prompt("Escriba su apellido");
const horasTrabajadas = parseFloat(prompt("¿Cantidad de horas trabajadas?"));
const costoPorHora = parseFloat(prompt("¿Costo por hora?"));

alert(
    `Corresponde a ${nombre} ${apellido}, ${
        horasTrabajadas * costoPorHora
    }$ por las ${horasTrabajadas} horas trabajadas`
);
 */

//3) Pedir un monto total y un porcentaje y devolver el valor que representa a ese porcentaje. El valor devuelto tiene que tener dos decimales.

/* 
const montoTotal = prompt("Escriba el monto total");
const porcentaje = prompt("Escriba un porcentaje");
const monto = (montoTotal * porcentaje) / 100;
alert(`El ${porcentaje}% de ${montoTotal} es ${monto.toFixed(2)}`);

 */

//4) Pedir un monto total y un valor y devolver el porcentaje que representa ese valor.
/* 
const montoTotal = prompt("Escriba el monto total");
const valor = prompt("Escriba un valor");
const porcentaje = (valor * 100) / montoTotal;
alert(`${valor} es el ${porcentaje.toFixed(2)}% de ${montoTotal}`);

 */

//5) Pedir un monto subtotal y devolver el monto total (con el IVA incluído del 21%).
/* 
const subtotal = parseFloat(prompt("Escriba un valor"));
const total = subtotal + subtotal * 0.21;
alert("El valor total es " + total);

 */

//6) Pedir un número y convertirlo a notación exponencial.
/* 
const numero = parseFloat(prompt("Escriba un valor")).toExponential();
alert(numero);
 */

//7) Pedir un número con decimales y devolver sólamente la parte entera. Por ejemplo, ingresa 3.48 y devolvemos 3.
/* 
const numero = parseInt(prompt("Escriba un valor con decimales"));
alert(numero);
 */

//8) Pedir dos valores a y b y luego intercambiarlos y mostrarlos por pantalla. Ejemplo: ingresa 1 y hola, entonces a = 1, b = 'hola'. Ahora intercambiarlos, a = 'hola' ,b = 1.
/* 
let a = prompt("Escriba algo");
let b = prompt("Escriba otra cosa");
const aux = a;
a = b;
b = aux;

alert("a vale " + a);
alert("b vale " + b);
 */

//9) Pedir dos lados y devolver el perímetro y área del rectángulo.
/* 
const ladoUno = parseFloat(prompt("Escriba un lado"));
const ladoDos = parseFloat(prompt("Escriba otro lado"));

const perimetro = ladoUno * 2 + ladoDos * 2;
const area = ladoUno * ladoDos;

alert("Perímetro: " + perimetro.toFixed(2));
alert("Área: " + area.toFixed(2));
 */

//10) Pedir un radio y devolver el perímetro y el área de una circunferencia. Utilizar Math.PI y acotar los decimales a dos cifras.

/* 
const radio = parseFloat(prompt("Escriba el radio de la circunferencia"));
const perimetro = (2 * Math.PI * radio).toFixed(2);
const area = (Math.PI * Math.pow(radio, 2)).toFixed(2); // Math.PI * radio * radio

alert(
    `La circunferencia de radio ${radio} tiene ${perimetro} de perímetro y ${area} de área.`
);
*/

//11) Pedir un número y calcular la raíz cuadrada del mismo. Muestre 4 cifras significativas en total.
/* 
const numero = parseFloat(prompt("Escriba un número"));

alert(Math.sqrt(numero).toPrecision(4));
 */

//12) Pedir dos números (base y exponente) y devolver la exponenciación.
/* 
const base = parseFloat(prompt("Escriba la base"));
const exponente = parseFloat(prompt("Escriba el exponente"));
alert(`El resultado de multiplicar ${exponente} veces al número ${base} es ${Math.pow(base,exponente)}`);
 */

//13) Pedir un número y devolver el valor absoluto.
/* 
const num = parseFloat(prompt("Escriba un número"));
alert("Valor absoluto: " + Math.abs(num));
*/

//14) Pedir un número natural y devolver la suma desde el 1 hasta el número ingresado. Utilizar la ecuación de Gauss.
/* 
const num = parseInt(prompt("Escriba un número"));
const suma = (num * (num + 1)) / 2;
alert(`La suma de los números enteros desde 1 hasta ${num} es ${suma}`);
*/

//15) Pedir un número natural, n, y un múltiplo natural, m. Devolver la suma de los n primeros múltiplos de m. Es decir, si ingreso n = 4 y m = 2, debería devolver 20 porque 2 + 4 + 6 + 8 = 20. Si ingreso n = 3 y m = 5, debería devolver 45, pues 3 + 6 + 9 + 12 + 15 = 45.

/* 
const num = parseInt(prompt("Escriba un número"));
const multiplo = parseInt(prompt("Escriba un múltiplo"));
const suma = (num * (num + 1) * multiplo) / 2;
alert(`La suma de los números enteros desde 1 hasta ${num} es ${suma}`);
 */

////////////////////////////////////////////////////////////////
//EJERCICIOS PARA PRACTICAR STRING. Intentar usar console.log.//
////////////////////////////////////////////////////////////////

// 1) generar un programa que pida un texto y lo convierta todo a lowercase
/* 
const texto = prompt('Escriba un texto para convertirlo a minúsculas').toLowerCase();
console.log(texto);
*/

// 2) generar un programa que pida un texto, lo convierta a minúsculas, y pida un caracter y borre todas las ocurrencias
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const caracter = prompt('Escriba un caracter a borrar');

console.log(texto.replaceAll(caracter, ""));
*/

// 3) generar un programa que pida un texto, lo convierta a minúsculas, y pida una palabra y borre la primer ocurrencia
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const palabra = prompt('Escriba una palabra para borrar la primer ocurrencia');

console.log(texto.replace(palabra, ""));
 */

// 4) generar un programa que pida un texto y una palabra y devuelva la primer posición en la que se encuentra
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const palabra = prompt('Escriba una palabra');

console.log(texto.indexOf(palabra));
 */

// 5) generar un programa que pida una palabra y devuelva la primer letra de la misma
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const palabra = prompt('Escriba una palabra');

console.log(texto[texto.indexOf(palabra)]);
console.log(texto.charAt(texto.indexOf(palabra)));
 */

// 6) generar un programa que reemplace todos los espacios por un caracter que envie el usuario
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const letra = prompt('Escriba un caracter');

console.log(texto.replaceAll(" ",letra));
 */

// 7) generar un programa que coloque un caracter que envie el usuario entre cada caracter del texto
/* 
const texto = prompt('Escriba un texto').toLowerCase();
const letra = prompt('Escriba un caracter');

console.log(texto.replaceAll("",letra));
 */

// 8) Escriba un programa que, dado un texto, me devuelva la longitud del mismo (incluyendo espacios).
/* 
const texto = prompt('Escriba un texto');
console.log("Longitud del texto: ", texto.length);
 */

////////////////////////////////////////////
//EJERCICIOS Y PROBLEMAS CON CONDICIONALES//
////////////////////////////////////////////

// 1) Pedir una edad y si es mayor de edad decirle "acceso concedido", en caso contrario decirle "acceso denegado"

/* const edad = parseInt(prompt('Escriba una edad'));

if (edad >= 18) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
} */
// 2) Ídem anterior pero si el usuario no coloca un número se lo alerta de que no ha ingresado un número.

/* 
const edad = parseInt(prompt('Escriba una edad'));

//Verifiquemos qué da edad y qué da !isNaN(edad)
//Podemos poner varios parámetros en un console.log. Se usa por ejemplo un texto descriptivo al principio
console.log("edad: ", edad);
console.log("!isNaN(edad): ", !isNaN(edad));
 */
//De esta forma reconoce al 0 como un número y dirá acceso denegado
/* 
if (isNaN(edad)) {
    console.log("No ha colocado un número");
} else {
    if (edad >= 18) {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
    }
} */

//Otra forma que no reconoce al 0 como un número válido
/* 
if (edad) {
    if (edad >= 18) {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
    }
} else {
    console.log("No ha colocado un número");
}
 */
//Otra forma si quiero que ingrese números naturales
/* 
if (edad > 0) {
    if (edad >= 18) {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
    }
} else {
    console.log("Por favor, coloque un número");
}

 */

// 3) Pedir un dividendo y un divisor, ambos positivos y el divisor distinto de cero (incluir validación). Devolver la división con dos decimales.
/* 
const dividendo = parseInt(prompt('Escriba el dividendo'));
let divisor;

if (isNaN(dividendo) || dividendo < 0) {
    console.log("Debía colocar un dividendo mayor a cero");
} else {
    divisor = parseInt(prompt('Escriba el divisor'));
    if (divisor > 0) {
        console.log(`Cociente: ${(dividendo / divisor).toFixed(2)}`);
    } else {
        console.log("Debía colocar un divisor mayor a cero");
    }
} */

// 4) Escribir un programa que pida un número y luego imprima por consola si se encuentra entre el 1 y el 100 (incluídos ambos números).

// const numero = parseInt(prompt('Escriba un número'));
/* 
if (isNaN(numero)) {
    console.log("Debía colocar un número");
} else {
    if (1 <= numero && numero <= 100) {
        console.log(`El número ingresado es el ${numero}`);
    } else {
        console.log("Debía colocar un número entre 1 y 100");
    }
}
*/


//otra forma
/* 
if (1 <= numero && numero <= 100) {
    console.log(`El número ingresado es el ${numero}`);
} else {
    console.log("Debía colocar un número entre 1 y 100");
}
 */

// 5) Pedir dos números e indicar cuál es mayor o si son iguales. Ejemplo, ingresa: 3 y 6, se devuelve: el 6 es mayor que el 3.
/* 
const numero1 = parseInt(prompt('Escriba un número'));
const numero2 = parseInt(prompt('Escriba otro número'));

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Era necesario ingresar dos números");
} else {
    if (numero1 > numero2) {
        console.log(`El ${numero1} es mayor que el ${numero2}`);
    } else if (numero1 < numero2){
        console.log(`El ${numero2} es mayor que el ${numero1}`);
    } else {
        console.log(`Los números ingresados son iguales`);
    }
}
 */

// 6) Pedir un número e indicar si es par o impar.

// const numero = parseInt(prompt('Escriba un número'));
/* 
if (isNaN(numero)) {
    console.warn("Debías ingresar un número");
} else {
    if (numero % 2 === 0) {
        console.log("el número es par");
    } else {
        console.log("el número es impar");
    }
} 
*/

/* 
//Otra forma introduciendo el operador ternario.
if (isNaN(numero)) {
    console.log("Debías ingresar un número");
} else {
    console.log(`${numero % 2 === 0? "el número es par": "el número es impar"}`);
} */

// 7) Tener almacenada una contraseña alfanumérica (de letras y números) y pedir una por pantalla. Si coincide que diga "acceso concedido", en caso contrario decirle "acceso denegado". NO DEBEN IMPORTARNOS LAS MAYÚSCULAS O MINÚSCULAS.
/* 
const contrasena = "abc123";

const clave = prompt('Escriba la contraseña').toLowerCase();

if (clave === contrasena) {
    //Si ponemos %c delante del texto, lo que haya en segundo parámetro lo toma como estilos css
    console.log("%c¡Genial! Contraseña válida", "color:yellowgreen; font-weight:bold; text-transform:uppercase;");
} else {
    console.error("%cContraseña inválida", "color:orangered; font-weight:bold; text-transform:uppercase;");
}
 */

// 8) Pedir una letra e indicar si es una vocal o no.
/* 
const letra = prompt("Escriba un caracter");

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log(`%cEl caracter '${letra}' es una vocal :)`, "font-weight:bold; font-size:1.1rem; color:#30E573");
} else {
    console.log(`%cEl caracter '${letra}' no es una vocal :(`, "font-weight:bold; font-size:1.1rem; color:#E48193");
} */

// 9) Una empresa puede llegar a pagar hasta un bono de 20000$ dependiendo de a cuántos clientes hayas podido conseguir en el mes. El rango es el siguiente:

// más de 10 -> obtiene bono completo
// de 8 a 10 -> obtiene 75% del bono
// de 5 a 7 -> obtiene 50% del bono
// menos de 5 -> no obtiene bono

// Escribir un programa que pida un sueldo en pesos y la cantidad de clientes que logró en el mes y devuelva el salario total que le corresponde, en pesos.
/* 
const bono = 20000;
const sueldo = parseFloat(prompt("Escriba el sueldo"));
const clientes = parseFloat(prompt("¿Cuántos clientes ha conseguido?"));

if (isNaN(sueldo) || isNaN(clientes) || sueldo <= 0 || clientes < 0) {
    console.error("No se puede procesar el pedido porque ha colocado mal los valores");
} else {
    if (clientes > 10) {
        console.log("Sueldo: ", sueldo + bono);
    } else if (8 <= clientes && clientes <= 10) {
        console.log("Sueldo: ", sueldo + ( bono * 0.75 ) );
    } else if (5 <= clientes && clientes <= 7) {
        console.log("Sueldo: ", sueldo + ( bono * 0.5 ) );
    } else {
        console.log("Sueldo: ", sueldo);
    }
}
 */

// 10) Pedir al usuario dos números y una operación entre suma, resta, multiplicación o división y devolver el resultado pedido.
/* 
//Se pueden agregar validaciones intermedias para que no pregunte todo junto y luego valide. Hice esta opción sólo porque sí.
const numero1 = parseFloat(prompt("Escriba un número"));
const numero2 = parseFloat(prompt("Escriba otro número (si los va a dividir, no puede ser 0)"));
const operacion = prompt("¿Qué operación desea realizar?");

if (isNaN(numero1) || isNaN(numero2) || (operacion === "/" && numero2 === 0)) {
    console.error("Introduzca los valores correctos.");
} else {
    if (operacion === "+") {
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    } else if (operacion === "-") {
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    } else if (operacion === "*") {
        console.log(`${numero1} X ${numero2} = ${numero1 * numero2}`);
    } else {
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    }
} 
*/