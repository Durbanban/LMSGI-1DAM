let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
// let comprobacion = 0;
let salir;
do {

    let dni = prompt("Introduzca su número de DNI:");
    let letra = prompt("Introduzca la letra:").toUpperCase();
    let letraCorrecta;

    let mens = (comprobarLetraDNI(dni, letra));
    alert(mens);
    salir = (mens !== "Su DNI es válido");
    

}while (salir);

function comprobarLetraDNI(dni, letra) {
    let mensaje;
    if (dni >= 0 && dni <= 99999999) {
        if (letras.includes(letra)) {
            mensaje = (letras[dni%23] === letra) ? "Su DNI es válido" : "Su DNI no es válido";
        }else {
            mensaje = "Por favor, introduzca una letra correcta";
        }
    }else {
        mensaje = "Por favor, introduzca un número válido";
    }
    return mensaje;
}

/*

SIN FUNCIONES

if (dni < 0 && dni > 99999999) {
    alert("Lo siento, su número no es correcto");
}else {
    comprobacion = dni % 23;
    if (letras.includes(letra)){
        letraCorrecta = letras[comprobacion];
        if (letra === letraCorrecta) {
            alert("Su DNI es válido");
        }else {
            alert("Su DNI no es válido");
        }
    }else {
        alert("Lo siento, su letra no es correcta");
    }
}
*/

