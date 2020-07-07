//Hosting é içamento da variavel com o tipo 'var' que mesmo que declarada depois ela considera que ja existe 
//mas indefinida 
console.log('a =', a)
var a = 3
console.log('a =', a)

//com o 'Let' não funciona da mesma maneira, a variavel não vai existir se declarada antes.
console.log('a =',a)
//let a = 3
console.log('a =',a)