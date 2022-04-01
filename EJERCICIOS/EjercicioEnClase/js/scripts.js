let conjunto = new Array();
let num;
let suma = 0;
let tope = +prompt("¿Qué tamaño quiere que tenga el array?");
    do {
        num = +prompt("Introduzca un número positivo");
        if (isFinite(num) && num >= 0) {
            if (conjunto.length == tope) {
                suma -= conjunto.shift();
                suma += num;
                conjunto.push(num);
            }else {
                suma += num;
                conjunto.push(num);
            }
            alert(conjunto + " y todo suma: " + suma);
            
        }
    }while (isFinite(num) && num >= 0);