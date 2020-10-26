const alunos = [
    {nome: 'joão', nota : 7.3, bolsista: false},
    {nome: 'maria', nota : 9.2, bolsista: true},
    {nome: 'pedro', nota : 9.8, bolsista: false},
    {nome: 'ana', nota : 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsista = (resultado, bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

// Desafio 2: Algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista 
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

