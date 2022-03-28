let num = prompt("Indique un número");
let sumatorio = 0;
let resultado = 1;

if (num > 0 && num < 171) {
    for (let i = 1; i <= num; i++) {
        resultado *= i;
        
    }
    alert("El factorial de " + num + " es " + resultado);
}else {
    alert("Por favor, introduzca un número entre 1 y 170");
}