let teacher = {
    age: 30,
    teaching: function(){
        console.log('Agora estou em aula...')
    }
}



// Um pouco a respeito da Herança Prototipica => Forma que o JavaScript trabalha com heranças.

let historyTeacher = Object.create(teacher, {
    subject: {
        value: 'História',
        writable: true,
        enumerable: true
    },
    test: {
        value: function(){
            console.log('Aplicando prova sobre Napoleão...')
        }
    }
})



historyTeacher.test();

console.log(historyTeacher.subject);

// Alteração apenas para observar a propriedade que colocamos como writable sendo modificada
historyTeacher.subject = 'Português'; 

console.log(historyTeacher.subject);

console.log(Object.getPrototypeOf(historyTeacher));
