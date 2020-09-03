const pessoa = {
   nome : 'Rebeca',
   idade : 2 ,
   peso : 13
}

console.log(Object.keys(pessoa))//pega só as chaves do objeto
console.log(Object.values(pessoa)) // pega só os valores do objeto
console.log(Object.entries(pessoa))// tranforma o objeto com cada chave e valor em array separado 

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(chave+": "+valor)   // Pode ser feito assim tambem Ex: console.log(`${chave}: ${valor}`)
});

/*
Define a propriedade da chave do objeto
*/
Object.defineProperty(pessoa, 'dataDeNacimento',{ 
    enumerable : true, // permite que a chave apareça ou não
    writable: false, // permite que seja atribuido valor externamente
    value : '01/01/2019' // atribui um valor a chave
})

pessoa.dataDeNacimento = '01/01/2017'
console.log(pessoa.dataDeNacimento)
console.log(Object.keys(pessoa))

const dest = { a : 1}
const o1 = { b : 2}
const o2 = { c : 1, a : 32}
const Obj = Object.assign(dest, o1,o2)// passa todos os atraibutos dos objetos para o objeto destinho que é o primeiro parametro

Object.freeze(Obj)// congelando objeto
Obj.a=7951
console.log(Obj)


