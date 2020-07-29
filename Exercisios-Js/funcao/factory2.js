function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto:1.0
    }
}

console.log(criarProduto('notebook', 2019.49))
console.log(criarProduto('IPAD', 3109.99))