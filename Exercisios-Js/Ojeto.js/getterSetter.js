const sequencia = {
    _valor : 1 , //Convenção para valor privados que java script não tem
    get valor() {return this._valor++},
    set valor(valor){
        if(this._valor <valor){ // validar se o valor e menor para o setter
            this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 900 //Para testar a validação do IF no set
console.log(sequencia.valor,sequencia.valor)
