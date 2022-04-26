let precioProteina = 4500;
let cantidadProteina = 0;
let carritoProteina = "";
let precioCreatina = 3500;
let cantidadCreatina = 0;
let carritoCreatina = "";
let precioVitaminas = 2000;
let cantidadVitaminas = 0;
let carritoVitaminas = "";
let precioFinal = 0;


function mostrarCarrito(){
    precioFinal = (precioProteina * cantidadProteina)+ (precioCreatina * cantidadCreatina)+ (precioVitaminas * cantidadVitaminas);
    if(cantidadProteina>0){
        carritoProteina = "Proteina | $4500 | " + cantidadProteina;
    }
    if(cantidadCreatina>0){
        carritoCreatina = "Creatina | $3500 | " + cantidadCreatina;
    }
    if(cantidadVitaminas>0){
        carritoVitaminas= "Vitaminas | $3500 | " + cantidadVitaminas;
    }
    let opcionCarrito = prompt("Carrito: \n" + "\nProducto | Precio | Cantidad \n"+ carritoProteina + "\n" + carritoCreatina + "\n" + carritoVitaminas +
                     "\nPrecio Final: $" +precioFinal + "\n 1. Pagar" + "\n 2. Volver al menu");
    if(opcionCarrito==="1"){
        alert("Su pago se realizo con exito. Muchas gracias!");
    } else if(opcionCarrito==="2"){
        menu();
    }else{
        mostrarCarrito();
    }
}
function mostrarPruductos(){
    let opcionProductos = prompt("Productos:  " + "\n 1. Proteina $4500 " + "\n 2. Creatina $3500 "+ "\n 3. Vitaminas $2000 " + "\n 4. Volver al menu");
    switch(opcionProductos){
        case "1":
            cantidadProteina += 1;
            mostrarPruductos()    
        case "2":
            cantidadCreatina += 1;
            mostrarPruductos()       
        case "3":
            cantidadVitaminas += 1;
            mostrarPruductos()
        default:
            menu();
            break;
    }
}
function menu(){
    let opcion = prompt("1. Productos" + "\n2. Carrito"+ "\n3. Salir"+"\nIngrese su opcion aqui: ");
    switch(opcion){
        case "1":
            mostrarPruductos();
            break;
        case "2":
            mostrarCarrito();
            break;
        case "3":
            alert("Su compra ha sido cancelada.");
            break;
        default:
            alert("Porfavor ingrese una opcion valida.");
            menu();
    }
}
menu();
