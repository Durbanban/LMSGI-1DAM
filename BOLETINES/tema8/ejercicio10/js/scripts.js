
let cadenaObjetivo = prompt("Introduzca una palabra")
let mensaje = esPalindromo(cadenaObjetivo);
function esPalindromo (cadena) {
    let cadenaSeparada = cadena.split("");
    let cadenaSeparadaInversa = cadenaSeparada.reverse();
    let cadenaInversa = cadenaSeparadaInversa.join("");
    let resultado;
    if (cadena === cadenaInversa) {
        resultado = "Es un palíndromo";
    }else {
        resultado = "No es un palíndromo";
    }
    return resultado;
}

alert(mensaje);