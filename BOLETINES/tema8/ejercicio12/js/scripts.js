let arrayNum = new Array();
let tope = +prompt("¿Cuántos números quiere en el array?");
let num;
while (arrayNum.length < tope) {
    num = +prompt("Introduzca un número");
    if (isFinite(num)){
        arrayNum.push(num);
    }else {
        alert ("Por favor, introduzca un número válido");
    }
};

alert("Array desordenado: " + arrayNum);

function ordenarArray (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] < array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }        
    }
}

ordenarArray(arrayNum);
alert("Array ordenado: " + arrayNum);
