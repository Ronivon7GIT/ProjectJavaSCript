const valores = [1.1,2.8,6.9,9.6] 
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, true, null, 'Teste')/// pode quardar qualquer tipo dentro de um array
console.log(valores)

console.log(valores.pop())// remove a ultima posição do array
delete valores[0] //deleta uma posição especifica do array.
console.log(valores)

console.log(typeof valores) // array e do tipo object 
