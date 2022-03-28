let cadena = prompt("Introduzca una palabra:");
let resultado = "La cadena tiene una mezcla de mayúsculas y minúsculas."

function compararCadena (cadenaAComparar) {
    let cadenaMayus = cadenaAComparar.toUpperCase();
    let cadenaMinus = cadenaAComparar.toLowerCase();
    resultado = cadenaAComparar === cadenaMayus ? "La cadena sólo tiene mayúsculas." : resultado;
    resultado = cadenaAComparar === cadenaMinus ? "La cadena sólo tiene minúsculas." : resultado;
    return resultado;
}

alert(compararCadena(cadena));