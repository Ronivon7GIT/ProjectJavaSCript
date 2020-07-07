let isAtivo =false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(isAtivo)

// O '!!' tem como ebjetivo forçar uma verificação, validando se o que for passado depois da expressão e um valor valido ou não.
console.log('Os Verdadeiros')// valores boleanos que sao verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('OS Falsos')// valores boleanos que são falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!isAtivo)

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' '))//mostrara true se achar o primeiro campo que for valido.

let nome = 'Lucas'
console.log(nome || 'Desconhecido')// operações para verificação de uma determinado campo, se por exeplo nome não existir ele mostrara desconhecido


