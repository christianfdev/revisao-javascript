/**
 * Uma parte importante da revisão: Arrays
 * 
 * Veremos algumas formas de manipular arrays.
 * 
 */

let test = [1, 2, 3, 'Olá!'];

// VERIFICAR se uma variável é de fato um array

console.log(Array.isArray(test)); // true

let a = "Oi!";

console.log(Array.isArray(a)); // false

// RETORNAR uma string com todos os elementos de um array

console.log(test.toString()); // Retorna o array sem os colchetes, separados por vírgula

console.log(test.valueOf()); // Retorna o Array com os colchetes, separados por vírgula

console.log(test.join(" - ")); // Retorna o Array em uma String personalizada com o termo que inserimos.


/**
 * Arrays podem ser usados como Pilha ou Fila
 * Para Pilha podemos utilizar os métodos push() e pop()
 * Para Fila podemos utilizar os métodos push() e shift()
 * No mais você já está familiarizado com as estruturas e de como funcionam dentro da linguagem.
 *  */ 
 


// SPLICE() - Para deletar, inserir ou substituir elementos em um array
// Ele altera o array original e retorna um array com os elementos excluídos

let arraySplice = [1, 2, 3, 4, "Test"];


// Para DELETAR são necessários dois argumentos: 
// position (determina a posição do primeiro elemento a ser deletado) 
// num (determina o número de elementos a serem deletados)

console.log(arraySplice.splice(1, 2)); // [2, 3]
console.log(arraySplice); // [1, 4, 'Test']


// Para INSERIR são necessários 3 argumentos:
// position
// 0
// Elementos a serem inseridos


arraySplice.splice(3, 0, 5, 6, 7);

console.log(arraySplice); // [1, 4, 'Test', 5, 6, 7]

// Para SUBSTITUIR são necessários também 3 argumentos:
// 1 - position - posição inicial
// 2 - quantidade de elementos a serem substituidos
// 3 - elemento que vai substituir, não necessariamente precisa ser a mesma quantidade de elementos do segundo argumento, exemplo
// Podemos passar um elemento que vai substituir cinco elementos. Logo, se o array tiver 5 posições, passará a ter apenas uma.


arraySplice.splice(0, 5, 5);
console.log(arraySplice); // [5, 7]



// SLICE() -> Para EXTRAIR um subconjunto de um array e adicioná-los a um novo array. Ele não altera o array original.
// Tem dois argumentos: start e stop. Lembrando que ele vai até o stop-1, ou seja, a posição com mesmo index do numero indicado no stop
// não é levada em consideração.
// Para clonar um array basta passar o método slice() sem argumentos.

let arraySlice = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let newArraySlice = arraySlice.slice(0, 3);

console.log(arraySlice);
console.log(newArraySlice);

// Para transformar outra estrutura em um array, como no exemplo abaixo
// Utilizamos a sintaxe [].slice.call(estrutura);

let stringTest = "abacate";

console.log([].slice.call(stringTest));


// PARA ENCONTRAR A POSIÇÃO DE UM ELEMENTO

let arrayIndex = [1, 2, 5, 3, 4, 5, 6, 7];

console.log(arrayIndex.indexOf(5)); // 2 -> index onde está armazenada a primeira ocorrência do valor 5

console.log(arrayIndex.lastIndexOf(5)) // 5 -> index onde está armazenada a última ocorrência do valor 5

