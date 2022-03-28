let num = prompt("Introduzca un número. Pulse cualquier letra para salir:")

function esPar (numero) {  
    return numero % 2 == 0 ? "El número es par" : "El número es impar";
}
do {
    /* El método isNaN() te comprueba si la variable no es un número, en este caso le damos la vuelta para que sea el false con el !*/
    if (!isNaN(num)) {
        alert(esPar(num));
        num = prompt("Introduzca un número. Pulse 0 para salir");
    }
}while (typeof num != "number");