//Object.preventExtensions posso deletar e excluir qualquer chave do objeto mais não posso incluir
const produto = Object.preventExtensions({
    nome :  'Qualquer',
    preco : 1.99,
    tag : 'promoção'
})

console.log('Extensivel : ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar Branca'
delete produto.tag
console.log(produto)

//Object.seal posso modificar, mas não posso incluir ou excluir chaves do object.
const pessoa = {
    nome : 'Julia',
    idade : 35
}
Object.seal(pessoa)
console.log('Selado = ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

// Object.freeze = Selado +  valores constantes  
