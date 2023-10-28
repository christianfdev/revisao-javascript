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
 




