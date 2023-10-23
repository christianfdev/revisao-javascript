/**
 * 
 * Exemplos de Hoisting com Expressões de Funções e Arrow Functions
 * 
 */




console.log(mult(10)); // 100


// As funções declaradas da maneira mais simples são movidas para o topo com toda a sua declaração, ou seja, podem ser utilizadas normalmente.
function mult(value) {
    return value*10;
}



console.log(arrow(10)); // Erro, pois arrow é levada ao topo ("içada") como undefined, ou seja, não é considerada nessa linha como uma função.


// As arrow functions e as expressões de funções funcionam de forma semelhante ao hoisting de variáveis
// Pelo simples fato de serem armazenadas em variáveis
var arrow = (value) => {
    return value*10;
}
