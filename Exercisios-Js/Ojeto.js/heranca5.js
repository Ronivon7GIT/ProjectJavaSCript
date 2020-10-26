console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Pelo prototype pode-se adicionar novas funções padróes da linguagem 
String.prototype.reverse = function(){
    return this.split('').reverse().join('') // Split separa a string em um ARRay, Reverse inverte o array e o Join junta todas as letras novamente
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]// retorna a primeira posição do array como no exemplo a baixo.
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function(){ // Nunca faça isso, nunca substitua o comportamento padrão  
    return 'qwerty'
}

console.log('EScola Cod3r'.reverse())