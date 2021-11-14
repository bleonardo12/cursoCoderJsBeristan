alert("Bienvenidos a Anaiak Indumentaria - Ropa deportiva");

do{
    let option = showMenu();
    if(option === (products.length +1)){
        break;
    }

    let qty = parseInt(prompt(selectedQty));
    addToCard(option,qty);

    resp = prompt("Desea continuar comprando? s / n")
}while(resp === 's');

if(cart.length > 0) showTotal();

alert("Gracias por su visita");
