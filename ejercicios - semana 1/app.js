/////////////////////////////
//EJERCICIOS PROMPT Y ALERT//
/////////////////////////////

//1) Pedir nombre al usuario y saludarlo por pantalla con el nombre que haya escrito. Ejemplo: si el nombre es Pablo devuelve "¡Hola, Pablo!"
 
// Resolucion

// const nombreA = prompt(" Ingrese su nombre de usuario ");
// alert(`¡Hola, ${nombreA}!`);



//2) Pedir el nombre, el apellido, el número de horas trabajadas y el costo por hora. Debe devolver por consola un texto con su nombre completo y la paga correspondiente.

// Resolucion

// const nombre = prompt(" Ingrese su nombre ");
// const apellido = prompt(" Ingrese su apellido ");
// const horasTrabajo = parseInt(prompt("Ingrese la cantidad de hs trabajadas"));
// const valorHora = parseInt(prompt("Ingrese el valor de su hora"));

// console.log("Valor jornada trabajada:" + parseInt(horasTrabajo) * parseInt(valorHora));


//3) Pedir un monto total y un porcentaje y devolver el valor que representa a ese porcentaje. El valor devuelto tiene que tener dos decimales.

// Resolucion

// const montoTotal = prompt("Ingrese el monto total");
// const porcentaje = prompt("Ingrese el porcentaje");
// const montoFinal = (montoTotal * porcentaje) / 100;

// console.log("Importe final:" montoFinal);




//4) Pedir un monto total y un valor y devolver el porcentaje que representa ese valor.

// const montoTotal = parseInt(prompt("Ingrese el valor total"));
// const valorDivisor = parseInt(prompt("Ingrese el valor divisor"));
// const montoFinal = (montoTotal * valorDivisor) / 100;

// alert("Porcentaje:" + montoFinal);

//5) Pedir un monto subtotal y devolver el monto total (con el IVA incluído del 21%).

// const montoSubTotal = parseInt(prompt("Ingrese Valor sub total para calcular su total con IVA 21%"));
// const impuestos = (montoSubTotal * 21) / 100;
// const montoTotal = montoSubTotal + impuestos; 


// alert("Monto total con iva incluido:" + " " + montoTotal);

//6) Pedir un número y convertirlo a notación exponencial.

//7) Pedir un número con decimales y devolver sólamente la parte entera. Por ejemplo, ingresa 3.48 y devolvemos 3.

//8) Pedir dos valores a y b y luego intercambiarlos y mostrarlos por pantalla. Ejemplo: ingresa 1 y hola, entonces a = 1, b = 'hola'. Ahora intercambiarlos, a = 'hola' ,b = 1.

//9) Pedir dos lados y devolver el perímetro y área del rectángulo.

//10) Pedir un radio y devolver el perímetro y el área de una circunferencia. Utilizar Math.PI y acotar los decimales a dos cifras.

//11) Pedir un número y calcular la raíz cuadrada del mismo. Muestre 4 cifras significativas en total.

//12) Pedir dos números (base y exponente) y devolver la exponenciación.

//13) Pedir un número y devolver el valor absoluto.

//14) Pedir un número natural y devolver la suma desde el 1 hasta el número ingresado. Utilizar la ecuación de Gauss.

//15) Pedir un número natural, n, y un múltiplo natural, m. Devolver la suma de los n primeros múltiplos de m. Es decir, si ingreso n = 4 y m = 2, debería devolver 20 porque 2 + 4 + 6 + 8 = 20. Si ingreso n = 3 y m = 5, debería devolver 45, pues 3 + 6 + 9 + 12 + 15 = 45.

////////////////////////////////////////////////////////////////
//EJERCICIOS PARA PRACTICAR STRING. Intentar usar console.log.//
////////////////////////////////////////////////////////////////

// 1) generar un programa que pida un texto y lo convierta todo a lowercase

// 2) generar un programa que pida un texto, lo convierta a minúsculas, y pida un caracter y borre todas las ocurrencias

// 3) generar un programa que pida un texto, lo convierta a minúsculas, y pida una palabra y borre la primer ocurrencia

// 4) generar un programa que pida un texto y una palabra y devuelva la primer posición en la que se encuentra

// 5) generar un programa que pida una palabra y devuelva la primer letra de la misma

// 6) generar un programa que reemplace todos los espacios por un caracter que envie el usuario

// 7) generar un programa que coloque un caracter que envie el usuario entre cada caracter del texto

// 8) Escriba un programa que, dado un texto, me devuelva la longitud del mismo (incluyendo espacios).

////////////////////////////////////////////
//EJERCICIOS Y PROBLEMAS CON CONDICIONALES//
////////////////////////////////////////////

// 1) Pedir una edad y si es mayor de edad decirle "acceso concedido", en caso contrario decirle "acceso denegado"

// 2) Ídem anterior pero si el usuario no coloca un número se lo alerta de que no ha ingresado un número.

// 3) Pedir un dividendo y un divisor, ambos positivos y el divisor distinto de cero (incluir validación). Devolver la división con dos decimales.

// 4) Escribir un programa que pida un número y luego imprima por consola si se encuentra entre el 1 y el 100 (incluídos ambos números).

// 5) Pedir dos números e indicar cuál es mayor o si son iguales. Ejemplo, ingresa: 3 y 6, se devuelve: el 6 es mayor que el 3.

// 6) Pedir un número e indicar si es par o impar.

// 7) Tener almacenada una contraseña alfanumérica (de letras y números) y pedir una por pantalla. Si coincide que diga "acceso concedido", en caso contrario decirle "acceso denegado". NO DEBEN IMPORTARNOS LAS MAYÚSCULAS O MINÚSCULAS.

// 8) Pedir una letra e indicar si es una vocal o no.

// 9) Una empresa puede llegar a pagar hasta un bono de 20000$ dependiendo de a cuántos clientes hayas podido conseguir en el mes. El rango es el siguiente:

// más de 10 -> obtiene bono completo
// de 8 a 10 -> obtiene 75% del bono
// de 5 a 7 -> obtiene 50% del bono
// menos de 5 -> no obtiene bono

// Escribir un programa que pida un sueldo en pesos y la cantidad de clientes que logró en el mes y devuelva el salario total que le corresponde, en pesos.

// 10) Pedir al usuario dos números y una operación entre suma, resta, multiplicación o división y devolver el resultado pedido.