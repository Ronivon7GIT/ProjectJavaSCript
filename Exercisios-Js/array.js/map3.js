Array.prototype.map2 = function(callback){
    const newArray = []
    for( i = 0 ; i < this.length ; i++){
        newArray.push(callback(this[i],i,this))   
    }
  return newArray    
}

const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"Kit de Lapis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}'
    ]
    //Retona um array apenas com os preços
    
    
    const paraObjetos = json => JSON.parse(json) //transforma o Json em Objeto 
    const apenasPreco = produto => produto.preco // pega o produto e acessa o preço
    const resultado = carrinho.map2(paraObjetos).map2(apenasPreco) // transforma o o json em objeto e pega apenas o preço e retorna um array com apenas o preço
    console.log(resultado)