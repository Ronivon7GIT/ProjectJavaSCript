const resultado = nota => nota >= 7 ? 'Aprovado':'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

const media = (nota1,nota2,nota3) => (nota1+nota2+nota3)/3 >= 7 ? 'Aprovado':'Reprovado'

console.log(media(7.5,5.5,6.5))
