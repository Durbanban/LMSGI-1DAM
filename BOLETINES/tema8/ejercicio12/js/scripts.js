let arrayNum = new Array();
let tope = +prompt("¿Cuántos números quiere en el array?");
let num;
while (arrayNum.length < tope) {
    num = +prompt("Introduzca un número");
    arrayNum.push(num);
};

alert(arrayNum);

function ordenarArray (array) {
    let mayor, menor;

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= array[i+1]) {
            mayor = array[i+1];
            menor = array[i];
            array.splice(i, 1);
            array.push(menor);
        }

        
    }
    
}

ordenarArray(arrayNum);
alert("Array ordenado: " + arrayNum);





