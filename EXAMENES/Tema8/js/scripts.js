// Ejercicio 1

alert("Bienvenido al examen de la unidad 8");
let arrayPersonas = new Array();
let nombre;
function pedirNombres() {
    do  {
        nombre = prompt("Introduzca un nombre (un número para terminar): ");
        if (isNaN(nombre)){
            arrayPersonas.push(nombre);
        }
    }while (isNaN(nombre));
    return arrayPersonas;
}

// Ejercicio 2


function camelize(cadena) {
    return cadena.replace(/(?:^\w|[A-Z]|\b\w)/g, function(palabra, index) {
        return index === 0 ? palabra.toLowerCase() : palabra.toUpperCase();
    }).replace(/\s+/g, '');
}

function quitarGuiones(cadena) {
    let arrayAux = new Array();
    let resultado;
    arrayAux = cadena.split("-");
    resultado = arrayAux.join(" ");
}
// Ejercicio 3

function sortear (array) {
    let max = array.length();
    let min = 0;
    let num = Math.random() * (max - min + 1) + min;
    return array[num];

}

// Ejercicio 4

function principal();
let arrayPrueba = pedirNombres();
alert(arrayPrueba);

let cadenaEj2 = camelize("border-left-radius");
alert(quitarGuiones(cadenaEj2));
