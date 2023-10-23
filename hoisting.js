/**
 * Para fixar algumas situações de hoisting
 */





function multiply(value){
    return value*10;
}

console.log(multiply(a)); // NaN

console.log(typeof a); // undefined

var a = 20; // A declaração da variável sobe, porém é inicializada como undefined antes de chegar nessa linha de código.

// Utilizando let

console.log(multiply(b));

console.log(typeof b);

let b = 20;


// Ocorre um erro pois a varíavel b sobe, porém não é inicializada. 