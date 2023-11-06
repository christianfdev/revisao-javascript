/**
 * 
 * Revisão básica a respeito de RegExp
 * 
 */

//Criar uma RegExp

let reg = /test/;

// ou

let rege = new RegExp('test');


// Testar correspondência

console.log(reg.test('existe a palavra test ?')); // true

console.log(rege.test('existe a palavra test ?')); // true

// Alguns marcadores

//OBS.: É possível combinar os marcadores

// Marcador de ignorar (i)
// Ignora se as letrar são maiúsculas ou minúsculas   

//Exemplo

console.log(reg.test('Test')); // false por conta da letra T maiúscula

let marcadorI = /test/i;

console.log(marcadorI.test('Test')); //true


// Marcador global (g)
// Sem ele o RegExp verifica somente a primeira correspondência
// Com ele o RegExp verifica todas as correspondências


// exec() do RegExp realiza uma busca de uma correspondência
// e retorna em um Array a correspondência e os detalhes dela
// por retornar apenas uma por vez é preciso colocá-la em um loop

let testExec = /test/gi;

let message = 'test do test de mais test em cima de test';

// primeiro exemplo

/* [
  'test',
  index: 0,
  input: 'test do test de mais test em cima de test',
  groups: undefined
]
*/
console.log(testExec.exec(message));


// segundo exemplo
let resultados = [];
let result;

do {
    result = testExec.exec(message);
    if(result){
        resultados.push(result);
    }
}while(result != null)

console.log(resultados);


// O método str.match() retorna todas as correspondências de regexp
// na string str

let str = 'Olá! como vai? Olá! vou bem!';

let testMatch = /olá/gi;

console.log(str.match(testMatch)); // [Olá, Olá]


// Usando RegExp para substituir todas as ocorrências 
// Em uma String com replace()

let testReplace = 'Test maiusculo. test minusculo.';
let replaceResult = testReplace.replace(/test/gi, 'troquei');

console.log(replaceResult);