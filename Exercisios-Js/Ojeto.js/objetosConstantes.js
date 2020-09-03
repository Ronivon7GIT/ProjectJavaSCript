//pessoa -> 123 -> {...}
const pessoa = {nome : 'João'} // Objeto constate que não pode ser criado um objeto no mesmo indereço de memoria
pessoa.name = 'Pedro'
console.log(pessoa)

//pessoa  -> 456 -> {...}
Object.freeze(pessoa) // o freeze impede que seja modificado qualquer atributo do objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : 'João'}) // Objeto criado constante que não pode ser alterado