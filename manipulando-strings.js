/**
 * Agora vamos para algumas maneiras de trabalhar com Strings 
 */

let text = 'Olá! Sou sua String de Teste!';


// OBTER o tamanho de uma string: 

console.log(text.length);

// Os métodos acessados em uma variável string também podem ser acessados em sua forma literal:

console.log("Olá!".length);


// OBTER os valores de uma string primitiva:

console.log("Primeiro: " + text.valueOf() + " - Segundo: " + text.toString() + " - Terceiro: " + text.toLocaleString());

// ACESSAR algum index de uma string:

console.log(text[6]); // o

//CONCATENAR strings: 

let a = text.concat("Concatenei aqui!"); // Me retorna uma nova string com a concatenação

console.log(a);

// Porém, o método mais comum de ser usado é o com o operador '+':

let b = text + "Concatenei novamente aqui!";

console.log(b);

//EXTRAIR substrings: 
// substring() => O primeiro argumento é o start, o segundo é o end. O end é opcional, e ele ignora a posição que informamos no end, selecionando os caracteres antes dele:

console.log(text.substring(13, 19)); // String


// slice() ==> Funciona da mesma forma do substring(), porém pode não ser passado nada e ele entende que você quer a string inteira.

console.log(text.slice(13, 19)); // String


// LOCALIZAR uma substring: 

// Retorna o index do primeiro caractere da substring informada | Busca pela primeira aparição dela
// No indexOf podemos informar também a posição que desejamos que ele comece a procurar

console.log(text.indexOf("String")); // 13

// Retorna a última aparição, informando o index do primeiro caractere da substring encontrada

console.log(text.lastIndexOf("String")); // 13


// REMOVENDO espaços em branco:
// Removerá espaços em branco do inicio e do final da String
// Também podem ser utilizados os seguintes métodos para remover apenas do inicio trimStart() ou apenas do final trimEnd()

console.log(text.trim()); 

// COMPARANDO strings:
// Retorna 1 para true e -1 para false.
console.log(text.localeCompare("Ola! Sou sua String de Teste!"));

// Não podemos utilizar o operador '===' para comparar uma string criada como a nossa text, com uma string literal, pois o retorno será false.

console.log(text === "Ola! Sou sua String de Teste!"); // false

// SUBSTITUIR substrings
// Recebe dois argumentos: O primeiro corresponde ao termo/simbolo/regex que você quer que seja alterada, e o segundo corresponde ao termo que será inserido no lugar.
// OBS.: Dessa forma ele alterará a primeira aparição do termo "String".

let replaced = text.replace("String", "Palavra");

console.log(replaced);


// DIVIDIR uma String em um array de substrings
// Pode receber dois argumentos que são opcionais: Primeiro, separator, que informará onde as divisões devem ocorrer. O segundo, limitador, informa o máximo de substrings
// que podem ser geradas

let arraySubs = text.split(" ");
console.log(arraySubs);


// VERIFICAR se uma string contém outra string
// includes() é sensitive case, ou seja, diferencia maiúsculo de minúsculo 

console.log(text.includes("String")); // true