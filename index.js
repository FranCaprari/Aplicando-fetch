class Articulo {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    getId() {
        return this.id;
    }

    toString() {
        return "Nombre: " + this.nombre + " Precio: " + this.precio;
    }
}

class DataBase {
    constructor() {
        this.articulos = [];
        this.articulos.push(new Articulo(1, "Proteina", 4500));
        this.articulos.push(new Articulo(2, "Creatina", 3500));
        this.articulos.push(new Articulo(3, "Vitaminas", 2000));
    }

    getArticulo(id) {
        for (const articulo of this.articulos) {
            if (articulo.getId() === id) {
                return articulo;
            }
        }
        return null;
    }

    showAllArticulos() {
        let msg = '';
        for (const articulo of this.articulos) {
            msg = msg + articulo.getId() + ' - ' + articulo.getNombre() + '\n';
        }
        return msg;
    }

    getCantidadArticulos() {
        return this.articulos.length;
    }
}

function armarMenu(db) {
    let msg = 'BODY BEST SUPLEMENTOS\n\nArtículos disponibles\n\n';
    msg = msg + db.showAllArticulos();
    msg = msg + '\n0 - PAGAR/SALIR';
    msg = msg + '\n Ingrese el número del producto deseado';
    return msg;
}

function pedirAndValidarOpcion(db) {
    let opcion;
    do {
        error = false;
        opcion = parseInt(prompt(armarMenu(db)));
        if (isNaN(opcion)) {
            error = true;
        } else if (opcion < 0 || opcion > db.getCantidadArticulos()) {
            error = true;
        }
    } while(error);
    return opcion;
}

function addCompra(compras, idArticulo) {
    if (compras.has(idArticulo)) {
        let cantidad = compras.get(idArticulo) + 1;
        compras.set(idArticulo, cantidad);
    } else {
        compras.set(idArticulo, 1);
    }
}

function showCompras(db, compras, titulo) {
    let msg = titulo + '\n\n';
    for (let id of compras.keys()) {
        let articulo = db.getArticulo(id);
        if (articulo != null) {
            let cantidad = compras.get(id);
            let subtotal = articulo.getPrecio() * cantidad;
            msg = msg + articulo.toString() + " Cantidad: " + cantidad + " Subtotal: $" + subtotal + "\n";
        }
    }
    return msg;
}



function showFactura(db, compras) {
    let msg = showCompras(db, compras, 'Factura de compra');
    let cantidad = 0;
    let subtotal = 0;
    for (let id of compras.keys()) {
        let articulo = db.getArticulo(id);
        if (articulo != null) {
            cantidad = compras.get(id);
            subtotal = subtotal + (articulo.getPrecio() * cantidad);
        }
    }
    msg = msg + "\n\nTOTAL:  $" + subtotal + "\n";
    return msg; 
}

const db = new DataBase(); 

let opcion = pedirAndValidarOpcion(db);
let compras = new Map();
while (opcion != 0) {
    addCompra(compras, opcion);
    alert(showCompras(db, compras, 'Estos son los articulos que tiene en su carrito: '));
    opcion = pedirAndValidarOpcion(db);
}
if (compras.size === 0) {
    alert("Tu carrito esta vacio, muchas gracias por visitarnos!");
} else {
    alert(showFactura(db, compras));
}