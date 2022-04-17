

let nombre = prompt("Ingrese el nombre de usuario: ");
while (nombre != "francisco"){
    switch (nombre){
        case "":
            alert("Porfavor ingrese un nombre de usuario");
            break;
        default:
            alert("Nombre de usuario incorrecto.");
            break;
    }
        nombre = prompt("Ingrese el nombre de usuario: ");
}
alert("Nombre de usuario correcto.");
let contrasenia = prompt("Ingrese la contraseña: ");
while(contrasenia != "321"){
    switch(contrasenia){
        case "":
            alert("Porfavor ingrese una contraseña.");
            break;
        default: alert("Contraseña incorrecta.")
        break;
    }
    contrasenia = prompt("Ingrese la contraseña: ")
}
alert("Contraseña correcta.");
if(nombre === "francisco" & contrasenia==="321"){
    alert("Bienvenido al sistema." + " \nNombre de usuario: "+ nombre+ ". " + " \nContraseña: " + contrasenia + ".");
}