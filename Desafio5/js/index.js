let intentos = 3
let username = "diana"
let password = "abc"

function login() {
    while (intentos > 0){
        let inputUserName = prompt("Ingrese su nombre de usuario");
        let inputPassword = prompt("Ingrese su sontraseña: ");

        if(inputUserName == username && inputPassword == password){
            alert("Inicio de sesion exitosa.")
            break;
        } else{
            intentos--
            //alert("Usuario o contraseña incorrectos. Intentos restantes:" + )
        }
    }

    if(intentos == 0){
        alert("Se acabaron los intentos, intentar mas tarde")
    }
}