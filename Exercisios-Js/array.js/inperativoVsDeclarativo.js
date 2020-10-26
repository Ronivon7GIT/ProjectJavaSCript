const aluno = [
    { nome: 'joão', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativo = quando voce se preocupa como sera feito
let total = 0
for(let i = 0 ; i < aluno.length ; i++){
    total += aluno[i].nota
}
console.log(totalgz / aluno.length)

// Declarativo = quando voce não se preocupa como sera feito
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual
const total2 = aluno.map(getNota).reduce(soma) 
console.log(total2/aluno.length)
