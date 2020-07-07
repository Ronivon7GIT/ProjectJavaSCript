const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + '!'
const template =` 
    olá
    ${nome}!`  
  console.log(concatenacao, template)

  console.log(`1 + 1 = ${1 + 1}`)

  const up = Texto => Texto.toUpperCase()
  console.log(`Ei.. ${up('Cuidado')}!`)