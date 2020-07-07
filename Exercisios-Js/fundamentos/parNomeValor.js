//contexto global que esta fora de qualquer contexto que seja função ou objeto
const saudacao = 'opa'

function exec(){
  const saudacao = 'wertyu'// dentro de uma função a mesma variavel declarada mas em contexto diferente.
  return saudacao
}

//Objetos sãao grupos nome/valor
const cliente = {
   nome : 'Pedro',
   idade : 35,
   peso : 90, 
   endereco :{
       logradouro : 'Rua ertyui',
       numero : 123
   }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)