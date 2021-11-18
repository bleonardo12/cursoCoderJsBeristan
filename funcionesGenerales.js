// // Este archivo contiene las funciones necesarias para lograr una tienda Anaiak dinamica

// // Esta funcion genera el menú dinamico sobre la base de los productos existentes. Retorna el ID del producto escogido
// const showMenu = () =>{
//     let menu = "Escoge un producto \n";
//     products.forEach((product)=>{
//         menu += product.id + ".-" + product.name + "\n"
//     });
//     menu += (products.length + 1) + ".-Salir";
//     let opt = parseInt(prompt(menu));
//     return opt;
// };

// // -------------------------------------------------------------------------------------------------------------------

// // esta funcion determina si existe el stock suficiente para realizar la venta
// // // retorna:
// // false --> si no hay suficiente stock
// // true --> si hay suficiente stock
// const isStock = (quantity, stock ) => {
//     if(quantity > stock){
//         alert(`No tenemos suficiente stock disponible para esta venta, el total disponible es: ${stock}`);
//         return false
//     }
//     return true
// }

// // -------------------------------------------------------------------------------------------------------------------

// // Esta funcion se encarga de agregar un producto al carrito

// const addToCard = ( option, qty ) => {
//     const found = products.find(product => product.id === option.toString());
//     if(isStock(qty, found.stock)){
//         let item = {
//             quantity:qty,
//             price:found.price * qty,
//             name: found.name,
//         }
//         cart.push(item);
//         products[option - 1].stock -= qty;
//         alert(`${found.name} fue agregado al carrito`)
//     }
// };

// // -------------------------------------------------------------------------------------------------------------------

// // Esta funcion muestra el total a pagar y productos seleccionados
// const showTotal = () => {
// let dataToShow = "";
// let total = 0;
// cart.forEach(product => {
//     dataToShow += `Producto ${product.name} Cantidad: ${product.quantity} Precio: ${product.price} \n`;
//     total += product.price
// })
// dataToShow += `Total: ${total}`;
// alert(dataToShow);
// }

// // ----------------------------------------------------------------------------------------------
