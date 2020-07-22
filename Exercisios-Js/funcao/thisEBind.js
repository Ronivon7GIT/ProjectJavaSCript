const pessoa = {
    saudacao : 'Bom Dia',
    falar(){
        console.log(this.saudacao)// o 'this' referencia aquele que esta no mesmo contexto.
    }
}

pessoa.falar()
const falar = pessoa.falar

falar()//O 'This' fora do contexto pois foi armazenada separadamente em umaa variavel então resultado será 'undefined'

const falarDePessoa = pessoa.falar.bind(pessoa)//O 'Bind' faz com que o 'this' referenciado dentro d função fique amarrado ao objeto que ele foi criado
falarDePessoa()