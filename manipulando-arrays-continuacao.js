/**
 * 
 * Continuação da nossa revisão da manipulação de Arrays
 * 
 */


// EVERY()
// Passamos uma função que testa todos os elementos do array
// Só retorna true se todos os elementos passarem no teste

let arrayEvery = [1, 2, 3, 40, 50, 60, 100, 200];

let result = arrayEvery.every((element) => element > 100);

console.log(result); // false, pois existem elementos menores que 100

let resultTrue = arrayEvery.every((element) => element >= 1);

console.log(resultTrue); // true, todos os elementos passaram no test


// SOME()
// Parecido com o every, porém testa se "pelo menos um dos elementos" passa no teste

let arraySome = [10, 20, 30, 40, 100, 400, 500];

let resultSome = arraySome.some((element) => element > 400);

console.log(resultSome); // true -> pelo menos um dos elementos passou no teste


// SORT()
// Para ordenar arrays
// Se não passarmos algum argumento ele ordenará comparando a conversão para texto e o texto comparado na pontuação unicode do texto convertido

let arraySort = [1, 50, 10, 2, 4, 30];

console.log(arraySort.sort()); // [1, 10, 2, 30, 4, 50]

let arraySortOrdenado = arraySort.sort((a, b) => a - b); // Ordenar de forma numérica

console.log(arraySortOrdenado); // [1, 2, 4, 10, 30, 50]


// FILTER()
// Para criar um novo array com base em um existente, utilizando uma função para verificar
// quais elementos vão compor o novo array com base nas nossas especificações

let arrayFilter = [1, 30, 50, 20, 3, 4, 5];

let newArrayFilter = arrayFilter.filter((element) => element > 10); // [30, 50, 20]

console.log(newArrayFilter);

// Podemos encadear métodos de iteração no filter, pq ele retorna um novo array:

let testArrayFilter = arrayFilter
    .filter((element) => element > 10)
    .sort((a, b) => a - b);

console.log(testArrayFilter); // array filtrado e ordenado [20, 30, 50]


// MAP()
// Utilizado para transformar os elementos de um array

let arrayMap = [2, 5, 4, 3, 10, 20, 30];

let newArrayMap = arrayMap.map((element) => element * 10);

console.log(newArrayMap); // [20, 50, 40, 30, 100, 200, 300]

// ForEach()
// Age da mesma forma que o map, porém ele itera sobre o array original, mas não o altera a não ser que a função
// callback que é passada o faça e o seu retorno é undefined

let arrayForEach = [2, 5, 4, 3, 10, 20, 30];

arrayForEach.forEach((value) => {
    arrayForEach[arrayForEach.indexOf(value)] = value * 10;
}); 

// O retorno fica diferente do map, pois depois da primeira iteração o valor que era 2 passa a ser 20
// e quando o forEach passa pelo valor 20 do array original e faz a busca com base no indexOf
// ele vai realizar a alteração do primeiro elemento que ele encontrar
// por isso é necessário atenção em como criar a função que realizará as alterações no array

console.log(arrayForEach); // 200, 50, 40, 300, 100, 20, 30


// REDUCE()
// Utilizado para "reduzir" um array para um valor único
// Passamos uma função callback que retorna um valor que vai sendo acumulado cada vez que é executada
// Essa função tem os seguintes argumentos: accumulator, currentValue, currentIndex e array


let arrayReduce = [1, 2, 3, 4, 5, 10, 20, 30, 40];

let total = arrayReduce.reduce((acc, cv) => acc += cv ); // acc = accumulator, cv = currentValue

console.log(total);

// reduceRight() => Faz a mesma coisa que o reduce, porém na ordem contrária
// Ele inicia do fim do array e vai até o começo


