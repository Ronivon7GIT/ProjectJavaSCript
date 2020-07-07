const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 55, 99, 98]//extraíndo um valor de uma array
console.log(n1,n3,n5,n6)

const [,[,nota]] =[[,8,8],[9,6,8]]//extraíndo um valor dentro de uma matriz
console.log(nota)