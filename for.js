/**
 * Breve passada em conceitos da estrutura de repetição for
 */



// declaração normal

for (let i = 1; i < 10; i++){
    console.log(i);
}

// declaração o primeiro termo
let test = 1;

for(; test < 10; test++){
    console.log(test);
}

// declaração sem o segundo termo

for(let i = 1; ; i++){
    if(i == 10){
        break;
    }
    console.log(i);
}

//declaração sem o terceiro termo

for(let i = 1; i < 10; ) {
    console.log(i);
    i++;
}


// for... in
// Utilizado para iterar sobre Objetos, onde a ordem não é importante

let student = {
    name: "Joao",
    age: 11,
    email: "joao@joao.com"
}

for (value in student){
    console.log(value + ": " + student[value]);
}


// for... of
// Pode ser utilizado em objetos iterativos como:  Array, Map, Set, o objeto arguments, entre outros.
let arrayTest = [1, 2, 3, 4, 5];

for (value of arrayTest){
    console.log(value);
}


// forEach()
// O forEach executará uma função para cada elemento do Array. Essa função que será executada nós devemos passar como parâmetro.
// Podem ser passados os seguintes parâmetros para uma função declarada em um forEach:
// Valor atual (obrigatório) - O valor do elemento atual do array. 
// Índice (opcional) - O número do índice do elemento atual. 
// Array (opcional) - O objeto de array ao qual o elemento atual pertence.
let total = 0;

arrayTest = arrayTest.forEach((value) => {
    total += value;
})

console.log(total); // 15

