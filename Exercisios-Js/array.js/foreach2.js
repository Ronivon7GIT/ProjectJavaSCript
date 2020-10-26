Array.prototype.forEach2=function(callback){
    for(let i = 0 ; i< this.length; i++){
         callback(this[i],i,this)
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

//Para cada item do arra o Foeach executa a fução passada por parametro
// parametro do foreach nome, indice e array
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})