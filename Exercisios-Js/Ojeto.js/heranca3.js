const pai = {nome : 'Pedro', corCabelo: 'preto'}

const filha = Object.create(pai) // cria o objeto filha como o pai de herança
filha.nome = 'Ana'
console.log(filha.corCabelo)

const filha2 = Object.create(pai,{ // cria o objeto filha2 como pai de herança e com 'nome' de atributo do objeto filha
    nome : {value : 'Camila', writable : false     , enumerable :true }
})         //valor          |se pode sobreescrever | que pode ser listado

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? //Verifica se as propriedades do objeto filha2 s/ao deles ou herdadas.
       console.log(key) : console.log(`por herança : ${key}`)
}


