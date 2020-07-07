const peso1 = 1.0 
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.66
const avaliacao2 = 6.8777

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// '.toFixed' da propriedade number faz o controle de quantas casa decimais depois da virgula será mostrada.
console.log(media.toFixed(2))

//muda o valor da variavel para string, mas se colar o valor 2 no parametro transforma 
//o valor da variavel em binario
console.log(media.toString())

// 'typeof' verifica o tipo da variavel 
console.log(typeof peso2)
console.log(typeof Number)

