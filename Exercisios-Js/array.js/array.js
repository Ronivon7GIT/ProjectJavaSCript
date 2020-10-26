console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana'] 
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] ='Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()//ordem alfabetica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

//                apartir de qual elemento|Quantos elementos voce quer deletar | adicionar quantos elementos quiser apartir do elementos selecionado               
aprovados.splice(1                         ,2                                   ,'elemento1', 'elemento2')

console.log(aprovados)

