/**
 * 
 * Aqui faremos uma breve revisão a respeito dos Escopos de variáveis:
 * Global
 * Local
 * de Bloco
 * 
 * OBS.: 
 *  var -> pode ter Escopo Global ou Escopo Local
 *  let e const -> apenas escopo de Bloco
 */



var a = 10; // Variável inserida no Escopo Global, pois foi declarada fora de uma função

console.log(a);

function scope(){
    var a = 20; // Variável inserida no Escopo Local ou Escopo de Função, pois está dentro de uma função.

    console.log(a); // Se a variável a não fosse encontrada dentro do Escopo de Função, então a engine procuraria ela fora desse Contexto.

        if(a === 20){
            let b = 30; // Variável inserida no Escopo de Bloco, ou seja, ela só pode ser utilizada no bloco (dentro das "chaves" {}, onde está inserida).
            console.log(b); // Tudo ocorre bem
        }

    console.log(b); // Gera o erro "b is not defined", pois a variável b foi declarada em um Contexto de Bloco, que não é o mesmo de onde essa linha está sendo executada.
}

scope();