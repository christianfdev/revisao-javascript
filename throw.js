/**
 * 
 * Apenas para relembrar a sintaxe do Error
 * 
 */

// Criação de erro personalizado

function AccessNotPermitedError(message){
    this.name = 'AccessNotPermitedError';
    this.message = message;
}

AccessNotPermitedError.prototype = Object.create(Error.prototype);
AccessNotPermitedError.prototype.constructor = Error;



function maiorIdade(idade){
    if(idade < 18){
        throw new AccessNotPermitedError('Acesso não permitido a menores de 18 anos de idade');
    }else{
        console.log('Acesso Permitido');
    }
}

try{
    maiorIdade(17); // 
}catch(error){
    console.log(error.name + ':' + error.message); 
}