let arrayNum = new Array();
let tope = +prompt("¿Cuántos números quiere en el array?");
let num;
while (arrayNum.length < tope) {
    num = +prompt("Introduzca un número");
    arrayNum.push(num);
};

alert(arrayNum);

function ordenarArray (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] < array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }        
    }
    alert(array);
    
}

ordenarArray(arrayNum);
alert("Array ordenado: " + arrayNum);
