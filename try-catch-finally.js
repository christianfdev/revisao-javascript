/**
 * 
 * Passada breve em try... catch e finally
 * 
 */

/**

Testando erro com try... catch

function teste(){
    try{
        variavel += variavel;
    }catch(error){
        console.log(error.name + ':' + error.message);
    }
}

teste(); // ReferenceError: variavel is not defined

 */


/*

Testando finally mesmo com erro dentro do try

function teste(){
    try{
        variavel += variavel;
    }catch(error){
        console.log(error.name + ':' + error.message);
    }finally{
        console.log('Estou aqui!');
    }
}

teste(); // ReferenceError: variavel is not defined // Estou aqui!



*/

// Testando try... finally sem erros

let test = 10;

function teste(){
    try{
        test += test;
        console.log(test);
    }finally{
        console.log('Estou aqui!');
    }
}

teste(); // 20 // Estou aqui!