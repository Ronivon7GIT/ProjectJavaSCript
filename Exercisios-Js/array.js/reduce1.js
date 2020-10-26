const alunos = [
    {nome: 'joão', nota : 7.3, bolsista: false},
    {nome: 'maria', nota : 9.2, bolsista: true},
    {nome: 'pedro', nota : 9.8, bolsista: false},
    {nome: 'ana', nota : 8.7, bolsista: true}
]
/*
para cada posição do array de cada elemente a função reduce soma um elemento com o proximo elemento do array.
alunos.reduce(callback(acumulador, valorAtual, valorInicial ))
*/

console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a=> a.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador + atual
},0)

console.log(resultado)
