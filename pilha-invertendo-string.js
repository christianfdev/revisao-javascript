/**
 * 
 * Apenas uma forma de inverter String para demonstrar a estrutura de Pilha (Stack)
 * 
 */

var stringPrim = 'Teste';
var reverse = '';
var arrayT = [];

for(let i = 0; i < stringPrim.length; i++) {
    arrayT.push(stringPrim[i]);
}

console.log(arrayT); 

let length = arrayT.length;

for(let i = 0; i < length; i++) {
    reverse += arrayT.pop();
}

console.log(reverse);
console.log(arrayT);