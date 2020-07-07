const pessoa ={
     nome : 'Anna',
     idade : 5,
     endereco : {
         logradouro : 'Rua qwertyui',
         numero : 1000   
     }
}

const {nome , idade} = pessoa // vaiaveis extraídas de um objeto.
console.log(nome, idade)

const{nome : n, idade : i} = pessoa// Variavel extraída e daclarado como uma nova variavel.
console.log(n, i)

const {sobrenome , bemHumaorada = true} = pessoa// A variavel extraída não existe mas poderá existír por conta do objeto.
console.log(sobrenome, bemHumaorada)

const {endereco : {logradouro, numero, CEP}} = pessoa// extraíndo variaiveis de um objeto que se encontra dentro de outro objeto com uma variavel que ainda não existe.
console.log(logradouro, numero, CEP)

//const {conta: {ag, num,}} = pessoa// não se pode extraír uma variavel de um objeto que não existe 'Conta'.
//console.log(ag, num)