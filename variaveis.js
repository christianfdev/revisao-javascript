/**
 * Como o estudo de variáveis é para breve revisão, pois já é algo consolidado
 * Veremos a seguir apenas a aplicação do Acesso por Referência
 * Para relembrar como funciona quando copiamos o mesmo objeto para variáveis diferentes
 */


var student = {
    name: 'José da Silva',
    age: 15,
    email: 'josedasilva@jose.com'
}


var a = student;

var b = a;



console.log("Variável a: \n" + Object.values(a));

console.log("\nVariável b: \n" + Object.values(b));

b.name = 'Fernando';

console.log("\nVariável a: \n" + Object.values(a));

console.log("\nVariável b: \n" + Object.values(b));
