let conjunto = new Array();
let num;
let suma = 0;
let tope = +prompt("¿Qué tamaño quiere que tenga el array?");
    do {
        num = +prompt("Introduzca un número positivo");
        if (num >= 0) {
            if (conjunto.length == tope) {
                conjunto.shift();
                conjunto.push(num);
            }else {
                conjunto.push(num);
            }
            for (let i = 0; i < conjunto.length; i++) {
                suma += conjunto[i];
                
            }
            alert(conjunto + "Todo suma: " + suma);
            suma = 0;
            
        }
    }while (num >= 0);