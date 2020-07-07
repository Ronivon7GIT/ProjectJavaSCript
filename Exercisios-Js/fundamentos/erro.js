function tratarErroELancar(erro){
 //  throw new  Error('Mensagem de Erro')
 //  throw 10
 //  throw true
 //  throw 'mensagem'
   throw{
      nome: erro.nome,
      msg: erro.message,
      date: new date
   }
}

function imprimirNome(obj){
   try {
       console.log(obj.nome.toUpperCase()+' ')
   } catch (error) {
       tratarErroELancar(erro)         
   } finally{
       console.log('Final')
   }
}

const obj = {nome: 'roberto'}

imprimirNome(obj)